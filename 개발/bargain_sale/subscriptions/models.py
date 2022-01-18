from django.db import models

# Create your models here.


class Request(models.Model):
    name = models.CharField(max_length=50)
    phone_num = models.CharField(max_length=50)
    agency = models.CharField(max_length=50, choices=[(
        "KT", "KT"), ("SKT", "SKT"), ("LG U+", "LG U+"), ("기타", "기타")], default="통신사")
    company = models.CharField(max_length=50, choices=[(
        "Apple", "Apple"), ("삼성", "삼성"), (
        "기타", "기타")], default="희망 기종")
    pub_date = models.DateTimeField(auto_now=True)


def __str__(self):
    return self.title

# 성함, 연락처, 통신사, 희망 기종, 신청 시간
