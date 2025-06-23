from django.shortcuts import render
from .models import City

def home(request):
    cities = City.objects.all()
    return render(request, 'cities/home.html', {'cities': cities})

def city_detail(request, city_id):
    city = City.objects.get(id=city_id)
    return render(request, 'cities/city_detail.html', {'city': city})