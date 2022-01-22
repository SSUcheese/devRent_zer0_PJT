from django.core.exceptions import ValidationError

def validate_symbol(value):
    if (str in value) or (len(value) > 14):
        raise ValidationError("숫자만 입력해주세요", code='symbol-err')