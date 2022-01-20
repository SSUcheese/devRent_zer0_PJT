from django.shortcuts import render, redirect
from subscriptions.models import Submit
from .forms import FormSubmit

# Create your views here.


def home(request):
    return render(request, 'subscriptions/home.html')


def complete(request):
    return render(request, 'subscriptions/complete.html')
<<<<<<< HEAD
=======


def form_create(request):
    #post 방식으로 요청이 오면 들어온 값의 유효성 검사 실시하고 서버에 저장한다.
    if request.method == 'POST':
        get_form = FormSubmit(request.POST)
        
        if get_form.is_valid():
            get_form.save()
            return redirect('home') #이후에 제출 완료 알려주는 창 연결시킬 예정
    else:
        #get방식으로 요청이 오면 form을작성할 수 있도록 연결한다
        get_form = FormSubmit()
        context = {'forms': get_form}
    return render(request, 'subscriptions/form.html', context= context)
        
>>>>>>> main
