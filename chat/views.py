from django.shortcuts import render, get_object_or_404, redirect  # 👈 added redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .models import Message
from accounts.models import Profile

@login_required
def inbox(request):
    messages = Message.objects.filter(sender=request.user) | Message.objects.filter(receiver=request.user)
    messages = messages.order_by('-timestamp')

    chat_users = {}
    for message in messages:
        other_user = message.receiver if message.sender == request.user else message.sender
        if other_user not in chat_users:
            chat_users[other_user] = message

    user_profiles = {
        user: Profile.objects.get(user=user) for user in chat_users.keys()
    }

    return render(request, 'chat/inbox.html', {
        'chat_users': chat_users,
        'user_profiles': user_profiles
    })

@login_required
def chat_view(request, username):
    other_user = get_object_or_404(User, username=username)

    if request.method == 'POST':
        body = request.POST.get('message', '').strip()
        if body:
            Message.objects.create(sender=request.user, receiver=other_user, body=body)
            return redirect('chat_view', username=other_user.username)

    messages = Message.objects.filter(
        sender__in=[request.user, other_user],
        receiver__in=[request.user, other_user]
    ).order_by('timestamp')

    return render(request, 'chat/chat.html', {
        'other_user': other_user,
        'messages': messages
    })
