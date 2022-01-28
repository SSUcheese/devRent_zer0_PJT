from django import forms
from .models import Submit


class SubmitForm(forms.ModelForm):
    class Meta:
        model = Submit
        fields = '__all__'


def __str__(self):
    return self.title
