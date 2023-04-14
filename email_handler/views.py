from rest_framework import viewsets, mixins
from email_handler.serializers import EmailSerializer
from email_handler.models import Email

# Create your views here.

class EmailViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    queryset = Email.objects.all()
    serializer_class = EmailSerializer