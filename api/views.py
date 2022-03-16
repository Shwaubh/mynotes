from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def getRoutes(request):
    data = "My API"
    return JsonResponse(data, safe=False)