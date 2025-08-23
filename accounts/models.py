from django.db import models
from django.contrib.auth.models import User
from base.models import BaseModel
from django_countries.fields import CountryField

class ShippingAddress(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=100)
    country = CountryField()
    phone = models.CharField(max_length=100)
    current_address = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Profile(BaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_email_verified = models.BooleanField(default=False)
    email_token = models.CharField(max_length=100, null=True, blank=True)
    bio = models.TextField(max_length=500, blank=True, null=True)
    age = models.IntegerField(null=True, blank=True)
    profile_pic =profile_pic = models.ImageField(upload_to='profile_pics/', default='profile_pics/download.png')
    shipping_address = models.ForeignKey(
        ShippingAddress,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="shipping_address"
    )

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'


from django.db import models
from django.contrib.auth.models import User

class Preferences(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    CLEANLINESS_CHOICES = [
        ('High', 'High'),
        ('Medium', 'Medium'),
        ('Low', 'Low')
    ]

    SLEEP_SCHEDULE_CHOICES = [
        ('Early', 'Early'),
        ('Late', 'Late'),
        ('Flexible', 'Flexible')
    ]

    FOOD_CHOICES = [
        ('Veg', 'Veg'),
        ('Non-Veg', 'Non-Veg'),
        ('Eggetarian', 'Eggetarian'),
        ('Any', 'Any')
    ]

    PETS_CHOICES = [
        ('Yes', 'Yes'),
        ('No', 'No'),
        ('Doesn’t Matter', 'Doesn’t Matter')
    ]

    SMOKING_CHOICES = [
        ('Yes', 'Yes'),
        ('No', 'No'),
        ('Occasionally', 'Occasionally')
    ]

    STUDY_HABITS_CHOICES = [
        ('Regular', 'Regular'),
        ('Last Minute', 'Last Minute'),
        ('Group Study', 'Group Study'),
        ('Solo', 'Solo')
    ]

    SOCIAL_LIFE_CHOICES = [
        ('Introvert', 'Introvert'),
        ('Extrovert', 'Extrovert'),
        ('Ambivert', 'Ambivert')
    ]

    PARTYING_CHOICES = [
        ('Never', 'Never'),
        ('Occasionally', 'Occasionally'),
        ('Frequently', 'Frequently')
    ]

    GUEST_FREQUENCY_CHOICES = [
        ('Rarely', 'Rarely'),
        ('Sometimes', 'Sometimes'),
        ('Often', 'Often'),
        ('Never', 'Never')
    ]

    NOISE_TOLERANCE_CHOICES = [
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High')
    ]

    cleanliness = models.CharField(max_length=50, choices=CLEANLINESS_CHOICES)
    sleep_schedule = models.CharField(max_length=50, choices=SLEEP_SCHEDULE_CHOICES)
    food = models.CharField(max_length=50, choices=FOOD_CHOICES)
    pets = models.CharField(max_length=20, choices=PETS_CHOICES)
    smoking = models.CharField(max_length=20, choices=SMOKING_CHOICES)
    study_habits = models.CharField(max_length=50, choices=STUDY_HABITS_CHOICES)
    social_life = models.CharField(max_length=50, choices=SOCIAL_LIFE_CHOICES)
    partying = models.CharField(max_length=50, choices=PARTYING_CHOICES)
    guest_frequency = models.CharField(max_length=50, choices=GUEST_FREQUENCY_CHOICES)
    noise_tolerance = models.CharField(max_length=50, choices=NOISE_TOLERANCE_CHOICES)

    def __str__(self):
        return f"{self.user.username}'s Preferences"
