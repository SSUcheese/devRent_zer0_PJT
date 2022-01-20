from django.db import models
from .validators import validate_symbol

# Create your models here.


class Submit(models.Model):
    name = models.CharField(max_length=50)
    phone_num = models.CharField(max_length=8) #vlidator 추후에 추가해서 번호만 받게 수정할 예정이긴 한데 좀 더 깔끔한 필드 찾으면 그거로 갈아탈 예정
    agency = models.CharField(max_length=50, choices=[(
        "KT", "KT"), ("SKT", "SKT"), ("LG U+", "LG U+"), ("기타", "기타")], default="통신사")
    company = models.CharField(max_length=50, choices=[(
        "Apple", "Apple"), ("삼성", "삼성"), (
        "기타", "기타")], default="희망 기종")
    pub_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name, self.phone_num

# 성함, 연락처, 통신사, 희망 기종, 신청 시간
