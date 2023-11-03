from django.urls import path
from . import views

urlpatterns = [
    path('', views.HomePage),
    path('project', views.ProjectsPage),
    path('about', views.AboutPage),
]