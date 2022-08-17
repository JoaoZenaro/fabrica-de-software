from distutils.command.upload import upload
from django.db import models
from django.utils.html import mark_safe

# Create your models here.
class Professor(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.TextField(max_length=255)
    contato = models.CharField(max_length=255)
    img = models.ImageField(upload_to='profs')

    def __str__(self):
        return self.nome

    @property
    def img_preview(self):
        if self.img:
            return mark_safe('<img src="{}" width="300" height="300" />'.format(self.img.url))
        return "" 