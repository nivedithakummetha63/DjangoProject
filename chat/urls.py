from django.urls import path
from . import views

urlpatterns = [
    path('inbox/', views.inbox, name='inbox'),
    path('<str:username>/', views.chat_view, name='chat_view'),
]
