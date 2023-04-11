from django.db import models

# Create your models here.
class Comment(models.Model):
    date = models.DateTimeField(auto_created=True, null=True)
    body = models.CharField(max_length=240)
    updated = models.DateTimeField(auto_now=True, null=True)