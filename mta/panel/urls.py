from django.urls import path
from .views import panel_view, add_page, create_product, delete_product

app_name = 'panel'

urlpatterns = [
    path('', panel_view, name='panel_view'),
    path('add/', add_page, name='add'),
    path('create/', create_product, name='create'),
    path('delete/<int:pk>/', delete_product, name='delete_product')
]