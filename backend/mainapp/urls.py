from django.urls import path

from . import views

app_name = "mainapp"
urlpatterns = [
    path("users/login/", views.login_user),
]
