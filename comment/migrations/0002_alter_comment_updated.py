# Generated by Django 4.2 on 2023-04-11 20:50

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("comment", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="comment",
            name="updated",
            field=models.DateTimeField(null=True),
        ),
    ]
