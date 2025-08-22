import os
from pathlib import Path

# Base directory of the project
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY
SECRET_KEY = os.getenv(
    'DJANGO_SECRET_KEY',
    'l$ei0b66&##a7fl1%rd(mwx*yv#trf*9qb@agf2@=b8o!u!40@'  # fallback secret key (local dev only)
)

# Debug mode toggle (default True for local dev, use False in production)
DEBUG = os.getenv('DJANGO_DEBUG', 'True') == 'True'

# Hosts/domain names that this Django site can serve
ALLOWED_HOSTS = ['127.0.0.1', 'localhost', '.onrender.com']

# SITE URL for email links and other full URLs
SITE_URL = os.getenv('SITE_URL', 'http://127.0.0.1:8000')

# Email configuration using Gmail SMTP
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.getenv("EMAIL_HOST_USER", "nivedithakummetha@gmail.com")
EMAIL_HOST_PASSWORD = os.getenv(
    "EMAIL_HOST_PASSWORD",
    "dnwb uttm qazg lybc"  # fallback password (never commit actual passwords)
)
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER

# URL configuration (make sure this matches your project folder name)
ROOT_URLCONF = 'roomieradar.urls'

# Add other mandatory settings below like INSTALLED_APPS, MIDDLEWARE, TEMPLATES, etc.
