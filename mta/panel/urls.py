from django.urls import path
from .views import panel_view, add_page, create_product, delete_product, select_to_edit, update_product

app_name = 'panel'

urlpatterns = [
    path('', panel_view, name='panel_view'),
    path('add/', add_page, name='add'),
    path('create/', create_product, name='create_product'),
    path('delete/<int:pk>/', delete_product, name='delete_product'),
    path('product/<int:pk>/', select_to_edit, name='select'),
    path('product/<int:pk>/update/', update_product, name='update_product'),
    # path('update/<int:pk>/', update_product, name='update_product'),
]