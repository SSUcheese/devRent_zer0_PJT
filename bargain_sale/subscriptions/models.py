from django.db import models

# Create your models here.


class Request(models.Model):
    name = models.CharField(max_length=50)
    phone_num = models.CharField(max_length=50)
    agency = models.CharField(max_length=50, choices=[(
        "KT", "KT"), ("SKT", "SKT"), ("LG U+", "LG U+"), ("기타", "기타")], default="통신사")
    equipment = models.CharField(max_length=50, choices=[(
        "Z 플립3", "Z 플립3"), ("Z 폴드3", "Z 폴드3"), (
        "S21", "S21"), ("S21 Plus", "S21 Plus"), (
        "S21 Ultra", "S21 Ultra")], default="희망 기종")
    pub_date = models.DateTimeField(auto_now=True)


def __str__(self):
    return self.title

# 성함, 연락처, 통신사, 희망 기종, 신청 시간
