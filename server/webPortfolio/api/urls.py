from django.urls import path
from . import views

urlpatterns = [
    path('get_works/', views.getWorks, name='api'),
    path('get_projects/', views.getProjects, name='api'),
    path('get_stack/', views.getStack, name='api')
]
