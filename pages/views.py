from django.shortcuts import render

# Create your views here.
def index_view(request):
    return render(request, template_name='index.html', context={})

def about_view(request):
    return render(request, template_name="about.html", context={})

def shop_view(request):
    return render(request, template_name="shop.html", context={})

def careers_view(request):
    return render(request, template_name="careers.html", context={})

def blog_view(request):
    return render(request, template_name="blog.html", context={})