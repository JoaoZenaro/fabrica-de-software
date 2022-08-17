from ckeditor.fields import RichTextField
from django.db import models

class Contato(models.Model):
    body = RichTextField()
