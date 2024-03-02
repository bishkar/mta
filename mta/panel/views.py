from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required
def panel_view(request):
    return render(request, 'panel/panel.html')


@login_required
def create_view(request):
    return render(request, 'panel/edit.html', context={"new": "test"})
