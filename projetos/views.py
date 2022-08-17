import imp
from django.shortcuts import render

from .models import Projeto
from pesquisas.models import Pesquisa

# Create your views here.
def index(request):
    proj = Projeto.objects.all().order_by('-created_at')
    pesquisas = Pesquisa.objects.all()

    return render(request,'projetos/index.html', {
        'projetos': proj,
        'pesquisas': pesquisas
    })


def projeto(request, slug):
    pesquisas = Pesquisa.objects.all()

    proj = Projeto.objects.get(slug=slug)
    # projetos = Projeto.objects.all()

    # blog_object = Post.objects.get(id=post_id)
    # blog_object.views = blog_object.views+1
    # blog_object.save()

    return render(request,'projetos/projeto.html', {
        'projeto': proj,
        'pesquisas': pesquisas
    })