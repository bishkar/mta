from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.urls import reverse

from .forms import ProductForm
from .models import Product
@login_required
def panel_view(request):

    return render(request, 'panel/panel.html', context={"products": Product.get_all_products()})


@login_required
def add_page(request):
    return render(request, 'panel/edit.html', context={"new": "test"})


# def download_uploaded_files(f):
#     with open(f"images/")

@login_required
def create_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            form.save(commit=True)

            return redirect('panel:panel_view')
        return HttpResponse(f"{form.errors}")


def delete_product(request, pk):
    Product.delete_product(pk)
    return redirect('panel:panel_view')


# def update_product(request, pk):
#     product = Product.get_product(pk)
#     if request.method == 'POST':
#         form = ProductForm(request.POST, request.FILES, instance=product)
#         if form.is_valid():
#             form.save(commit=True)
#             return redirect('panel:panel_view')
#         return HttpResponse(f"{form.errors}")
#     return render(request, 'panel/edit.html', context={"product": product})