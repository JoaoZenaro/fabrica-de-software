from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.auth.models import User
from django.db import models
from django.forms import SlugField
from django.utils.html import mark_safe
from django.urls import reverse

# Create your models here.

class Parceiros(models.Model):
     img = models.ImageField(
        upload_to = "media/",
        help_text= "Procure as imagens",
        null=True,
     )
     name = models.CharField(max_length=255)
     def __str__(self):
        return self.name

class Sobre(models.Model):
    body = RichTextUploadingField()
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)
    logo = models.ManyToManyField(Parceiros, help_text="Selecione uma ou mais empresas parceiras")

    class Meta:
        ordering = ['-created_at',]

    def display_logo(self):
        return ', '.join([logo.name for logo in self.logo.all()[:3]])

    @property
    def thumbnail_preview(self):
        if self.thumbnail:
            return mark_safe('<img src="{}" width="300" height="300" />'.format(self.thumbnail.url))
        return "" 

class Imagens(models.Model):
    img = models.ImageField(
        upload_to = "media/",
        help_text= "Procure as imagens",
        null=True,
    )
    sobre = models.ForeignKey(
        "Sobre", on_delete=models.CASCADE, default=1)

    @property
    def img_preview(self):
        if self.img:
            return mark_safe('<img src="{}" width="300" height="300" />'.format(self.img.url))
        return ""

