from urllib import response
from django.http import HttpResponse
from django.shortcuts import render
from panel.models import Product


import logging
logger = logging.getLogger(__name__)


def index(request):
    products = Product.objects.all()

    return render(request, 'shop/index.html', {'products': list(products)})


def loadProducts(request, category=None):
    filter_args = {}
    logger.error(f'Category: {category}')
    if category != "None":
        filter_args['manufacturer'] = category

    productsFiltered = Product.objects.filter(**filter_args) 
    productsHtml = '<div class="container">'

    for i, product in enumerate(productsFiltered):
        productsHtml += f"""
            <div class='card-elem' id='{product.id}'>
                <h2>{product.title}</h2>
                <img width='50%' src='{product.image.url}'>
                <p><button class="active_desc">INFO</button></p>
                <p class="description">{product.description}</p>
            </div>
        """

        if (i + 1) % 3 == 0 and i != len(productsFiltered) - 1:
            productsHtml += '</div><div class="container">'

    productsHtml += '</div>'

    return render(request, 'shop/index.html', {'productsHtml': productsHtml})