# Generated by Django 5.0.1 on 2024-02-11 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goals', '0003_alter_todoitem_is_completed'),
    ]

    operations = [
        migrations.AddField(
            model_name='todoitem',
            name='processed_text',
            field=models.TextField(blank=True, null=True),
        ),
    ]
