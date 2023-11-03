from django.shortcuts import render, redirect


def HomePage(request):
    return redirect('http://localhost:3000')

def ProjectsPage(request):
    return redirect('http://localhost:3000/projects')

def AboutPage(request):
    return redirect('http://localhost:3000/about')
