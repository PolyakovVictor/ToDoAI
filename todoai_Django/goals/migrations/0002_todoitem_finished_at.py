# Generated by Django 5.0.1 on 2024-01-09 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goals', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todoitem',
            name='finished_at',
            field=models.DateTimeField(null=True),
        ),
    ]