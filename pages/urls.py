from django.urls import path, include
from pages.views import *

urlpatterns = [
    path('', index_view, name="home"),
    path('about/', about_view, name="about"),
    path('shop/', shop_view, name="shop"),
    path('careers/', careers_view, name="careers"),
    path('blog/', blog_view, name="blog"),
]