# Generated by Django 4.2 on 2023-04-11 19:31

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Comment",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "updated",
                    models.DateTimeField(null=True, verbose_name="Last updated"),
                ),
            ],
        ),
    ]
