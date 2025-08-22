from django import forms
from .models import Profile, Preferences


class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['bio', 'age', 'profile_pic']
        widgets = {
            'bio': forms.Textarea(attrs={
                'class': 'w-full border border-gray-300 p-3 rounded-xl',
                'rows': 4,
                'placeholder': 'Write something about yourself...',
            }),
            'age': forms.NumberInput(attrs={
                'class': 'w-full border border-gray-300 p-3 rounded-xl',
                'placeholder': 'Enter your age',
            }),
            'profile_pic': forms.ClearableFileInput(attrs={
                'class': 'w-full border border-gray-300 p-3 rounded-xl',
            }),
        }
class PreferencesForm(forms.ModelForm):
    class Meta:
        model = Preferences
        exclude = ['user']
        widgets = {
            field.name: forms.Select(attrs={'class': 'w-full border border-gray-300 p-2 rounded-lg'})
            for field in Preferences._meta.fields if field.name != 'user'
        }