from urllib import response
from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'shop/index.html')