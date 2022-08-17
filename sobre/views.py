from django.shortcuts import render

# Create your views here.
from pesquisas.models import Pesquisa
from sobre.models import Sobre

# Create your views here.
def index(request):
    pesquisas = Pesquisa.objects.all()
    sobre = Sobre.objects.get()

    return render(request,'sobre/index.html', {
        'pesquisas': pesquisas,
        'sobre': sobre
    })