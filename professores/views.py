from django.shortcuts import render

# Create your views here.
from pesquisas.models import Pesquisa
from professores.models import Professor

# Create your views here.
def index(request):
    pesquisas = Pesquisa.objects.all()

    profs = Professor.objects.all()

    return render(request,'professores/index.html', {
        'pesquisas': pesquisas,
        'profs': profs
    })