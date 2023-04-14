from django.db import models

# Create your models here.
class Email(models.Model):
    first_name = models.CharField(max_length=24)
    last_name = models.CharField(max_length=24)
    phone_number = models.CharField(max_length=11, null=True)
    email = models.EmailField()
    subject = models.CharField(max_length=48)
    body = models.CharField(max_length=240)