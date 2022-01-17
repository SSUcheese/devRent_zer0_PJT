from django.shortcuts import render
from subscriptions.models import Request

# Create your views here.


def home(request):
    return render(request, 'home.html')


def complete(request):
    return render(request, 'complete.html')
