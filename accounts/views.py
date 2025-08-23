import uuid
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

from base.emails import account_activation_email
from .models import Profile, Preferences
from .forms import ProfileForm, PreferencesForm


def index(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user_qs = User.objects.filter(username=username)
        if not user_qs.exists():
            messages.warning(request, 'Account Not Found')
            return HttpResponseRedirect(request.path_info)

        user = user_qs.first()

        if not user.profile.is_email_verified:
            messages.warning(request, 'Email Not Verified')
            return HttpResponseRedirect(request.path_info)

        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            messages.success(request, 'Login Successful')
            return redirect('home')

        messages.warning(request, 'Invalid Credentials')
        return HttpResponseRedirect(request.path_info)

    return render(request, 'login.html')


def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        age = request.POST.get('age')

        if User.objects.filter(username=username).exists():
            messages.warning(request, 'Account Already Exists')
            return HttpResponseRedirect(request.path_info)

        user_obj = User.objects.create(
            username=username,
            email=email,
            first_name=first_name,
            last_name=last_name
        )
        user_obj.set_password(password)
        user_obj.save()

        profile = Profile.objects.create(user=user_obj, age=age)
        profile.email_token = str(uuid.uuid4())
        profile.save()

        account_activation_email(email, profile.email_token)
        messages.success(request, 'Account Created. Check your email to verify!')
        return HttpResponseRedirect(request.path_info)

    return render(request, 'registation.html')


def activation_email(request, email_token=None):
    try:
        user_profile = Profile.objects.get(email_token=email_token)
        user_profile.is_email_verified = True
        user_profile.save()
        messages.success(request, 'Email Verified Successfully!')
        return redirect('login')
    except Profile.DoesNotExist:
        return HttpResponse("Invalid or expired activation link")


def logout_user(request):
    logout(request)
    messages.success(request, 'Logout Successful')
    return redirect('login')


def home(request):
    return render(request, 'home.html')


@login_required
def profile_view(request):
    profile = request.user.profile

    if request.method == 'POST':
        form = ProfileForm(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()
            return redirect('profile')
    else:
        form = ProfileForm(instance=profile)

    context = {
        'form': form,
        'profile': profile,
        'user': request.user
    }
    return render(request, 'profile.html', context)


def welcome_page(request):
    return render(request, 'welcome.html')


def public_profile(request, username):
    user = get_object_or_404(User, username=username)
    profile = user.profile
    return render(request, 'public_profile.html', {
        'user': user,
        'profile': profile
    })


@login_required
def preferences_view(request):
    preferences, created = Preferences.objects.get_or_create(user=request.user)

    if request.method == 'POST':
        form = PreferencesForm(request.POST, instance=preferences)
        if form.is_valid():
            form.save()
            return redirect('preferences')
    else:
        form = PreferencesForm(instance=preferences)

    return render(request, 'preferences.html', {'form': form})


@login_required
def find_matches_view(request):
    try:
        current_user = request.user
        current_prefs = Preferences.objects.get(user=current_user)
    except Preferences.DoesNotExist:
        messages.warning(request, "Please set your preferences first.")
        return redirect('preferences')

    matches = []
    other_users = Preferences.objects.exclude(user=current_user)

    for other in other_users:
        score = 0
        total = 10

        if other.cleanliness == current_prefs.cleanliness:
            score += 1
        if other.sleep_schedule == current_prefs.sleep_schedule:
            score += 1
        if other.food == current_prefs.food:
            score += 1
        if other.pets == current_prefs.pets:
            score += 1
        if other.smoking == current_prefs.smoking:
            score += 1
        if other.study_habits == current_prefs.study_habits:
            score += 1
        if other.social_life == current_prefs.social_life:
            score += 1
        if other.partying == current_prefs.partying:
            score += 1
        if other.guest_frequency == current_prefs.guest_frequency:
            score += 1
        if other.noise_tolerance == current_prefs.noise_tolerance:
            score += 1

        percent = int((score / total) * 100)

        try:
            profile_pic_url = other.user.profile.profile_pic.url
        except:
            profile_pic_url = '/static/images/default.png'

        matches.append({
            'username': other.user.username,
            'full_name': f"{other.user.first_name} {other.user.last_name}",
            'email': other.user.email,
            'score': percent,
            'profile': {
                'profile_pic': {
                    'url': profile_pic_url
                }
            }
        })

    matches.sort(key=lambda x: x['score'], reverse=True)

    return render(request, 'find_matches.html', {'matches': matches})
