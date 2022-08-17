from django.shortcuts import render
from contato.models import Contato

# Create your views here.
from pesquisas.models import Pesquisa

# Create your views here.
def index(request):
    pesquisas = Pesquisa.objects.all()
    contato = Contato.objects.get()

    return render(request,'contato/index.html', {
        'pesquisas': pesquisas,
        'contato': contato
    })