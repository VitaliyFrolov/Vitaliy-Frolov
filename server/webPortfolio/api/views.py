from django.http import JsonResponse
from .models import Work, Project, Stack

def getWorks(request):
    works = Work.objects.all()
    data = {'works': list(works.values())}
    return JsonResponse(data)

def getProjects(request):
    projects = Project.objects.all()
    data = {'projects': list(projects.values())}
    return JsonResponse(data)

def getStack(request):
    stack = Stack.objects.all()
    data = {'stack': list(stack.values())}
    return JsonResponse(data)