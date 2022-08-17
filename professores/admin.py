from django.contrib import admin
from django.utils.html import format_html
from django import forms
from .models import Professor

# Register your models here.

class ProfessorAdmin(admin.ModelAdmin):
   search_fields = ['nome']
   readonly_fields = ('img_preview',)

   def img_preview(self, obj):
        return obj.img_preview

   img_preview.short_description = 'img Preview'
   img_preview.allow_tags = True

admin.site.register(Professor, ProfessorAdmin)
