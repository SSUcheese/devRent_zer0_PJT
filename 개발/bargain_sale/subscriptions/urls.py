from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('complete/', views.complete, name='complete'),
    # path('form/', views.form_create, name='form-create'), #신청서 작성 view로 넘어가는 url
]
