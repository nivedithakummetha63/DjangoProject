from django.urls import path
from .views import index,register,activation_email,home,logout_user,profile_view,public_profile,preferences_view,find_matches_view,welcome_page
urlpatterns = [
path('',welcome_page, name='welcome'),
path('login/', index, name='login'),
    path('register/', register, name='register'),
    path('accounts/activate/', activation_email, name='activate_email'),
    path('home/', home, name='home'),
    path('logout/', logout_user, name='logout'),
    path('profile/', profile_view, name='profile'),  # 👈 THIS FIXED THE ISSUE
    path('user/<str:username>/', public_profile, name='public_profile'),
    path('preferences/', preferences_view, name='preferences'),
    path('find-matches/', find_matches_view, name='find_matches'),
]
