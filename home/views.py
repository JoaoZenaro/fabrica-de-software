from django.shortcuts import render

from .models import Carousel
from projetos.models import Projeto
from pesquisas.models import Pesquisa

# Create your views here.
def index(request):
    projetos = Projeto.objects.all()
    pesquisas = Pesquisa.objects.all()
    carousel1 = Carousel.objects.all()[0]
    carousel = Carousel.objects.all().exclude(pk=carousel1.id)

    quant = list(range(1,len(carousel)+1))

    return render(request,'home/index.html', {
        'projetos': projetos,
        'pesquisas': pesquisas,
        'img1': carousel1,
        'imgs': carousel,
        'quant': quant
    })