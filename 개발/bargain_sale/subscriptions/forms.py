from dataclasses import field, fields
from .models import Submit
from django import forms

class FormSubmit(forms.ModelForm):
    class Meta:
        model = Submit
        fields = ['name', 'phone_num', 'agency', 'equipment']
                
def __str__(self):
        return self.title