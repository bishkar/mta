from django.urls import path
from .views import panel_view, create_view

app_name = 'panel'

urlpatterns = [
    path('', panel_view, name='panel_view'),
    path('create/', create_view, name='create')
]