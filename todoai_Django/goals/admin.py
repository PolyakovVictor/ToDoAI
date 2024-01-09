from django.contrib import admin
from .models import TodoItem


@admin.register(TodoItem)
class PostAdmin(admin.ModelAdmin):
    list_display = ('user', 'text', 'created_at', 'finished_at', 'is_completed')
