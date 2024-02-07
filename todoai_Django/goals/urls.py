from django.urls import path
from .views import TodoItemView

app_name = 'goals'

urlpatterns = [
    path('items/', TodoItemView.as_view(), name='todoItem'),
    path('items/<int:pk>/', TodoItemView.as_view(), name='todoItemDynamic'),
]
