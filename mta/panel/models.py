from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=50)
    manufacturer = models.CharField(max_length=50)
    image = models.ImageField(upload_to="products")
    description = models.TextField(max_length=255)

    @staticmethod
    def get_all_products():
        return Product.objects.all()

    @staticmethod
    def delete_product(pk: int):
        Product.objects.get(pk=pk).delete()

    def update_book(self):
        pass
