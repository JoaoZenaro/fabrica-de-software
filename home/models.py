from django.db import models

# Create your models here.
class Carousel(models.Model):
    imagem = models.ImageField(upload_to='carousel')