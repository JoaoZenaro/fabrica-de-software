# Generated by Django 3.2.12 on 2022-08-04 20:09

import ckeditor_uploader.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Parceiros',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(help_text='Procure as imagens', null=True, upload_to='media/')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Projeto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('thumbnail', models.ImageField(upload_to='thumbnails')),
                ('body', ckeditor_uploader.fields.RichTextUploadingField()),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('views', models.IntegerField(default=0)),
                ('logo', models.ManyToManyField(help_text='Selecione uma ou mais empresas parceiras', to='projetos.Parceiros')),
            ],
            options={
                'ordering': ['-updated_at'],
            },
        ),
        migrations.CreateModel(
            name='Imagens',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(help_text='Procure as imagens', null=True, upload_to='media/')),
                ('projeto', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='projetos.projeto')),
            ],
        ),
    ]