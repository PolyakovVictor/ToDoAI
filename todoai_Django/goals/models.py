from django.db import models
from django.contrib.auth.models import User


class TodoItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    finished_at = models.DateTimeField(null=True)
    is_completed = models.BooleanField(default=False)
