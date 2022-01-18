from django.shortcuts import render
from subscriptions.models import Request

# Create your views here.


def home(request):
    return render(request, 'subscriptions/home.html')


def complete(request):
    return render(request, 'subscriptions/complete.html')
