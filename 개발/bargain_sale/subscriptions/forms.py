from dataclasses import field, fields
from .models import Submit
from django import forms


class SubmitForm(forms.ModelForm):
    class Meta:
        model = Submit
        fields = ['name', 'phone_num', 'agency', 'company']


def __str__(self):
    return self.title
