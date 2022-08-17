from django.shortcuts import render

from .models import Pesquisa

# Create your views here.
def index(request, slug):
    pesquisas = Pesquisa.objects.all()

    pes = Pesquisa.objects.get(slug=slug)

    return render(request,'pesquisas/pesquisa.html', {
        'pesquisa': pes,
        'pesquisas': pesquisas
    })