import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables (only needed for local testing)
load_dotenv()

# Base directory
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY
SECRET_KEY = os.getenv(
    'DJANGO_SECRET_KEY',
    'l$ei0b66&##a7fl1%rd(mwx*yv#trf*9qb@agf2@=b8o!u!40@'  # fallback for local
)
DEBUG = os.getenv('DJANGO_DEBUG', 'True') == 'True'
ALLOWED_HOSTS = ['127.0.0.1', 'localhost', '.onrender.com']

# SITE URL used in email links
SITE_URL = os.getenv('SITE_URL', 'http://127.0.0.1:8000')

# EMAIL CONFIGURATION (Gmail SMTP)
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_USE_TLS = True

EMAIL_HOST_USER = os.getenv("EMAIL_HOST_USER", "nivedithakummetha@gmail.com")
EMAIL_HOST_PASSWORD = os.getenv(
    "EMAIL_HOST_PASSWORD",
    "dnwb uttm qazg lybc"  # fallback only for dev; DO NOT push to public repos
)
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
