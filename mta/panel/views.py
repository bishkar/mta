from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required(login_url='/kk')
def panel_view(request):
    return render(request, 'panel/panel.html')