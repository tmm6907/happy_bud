from email_handler.models import Email
from rest_framework import serializers

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = '__all__'