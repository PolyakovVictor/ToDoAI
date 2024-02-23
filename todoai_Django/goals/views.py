from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import TodoItem
from .serializer import TodoItemSerializer
import os
from dotenv import load_dotenv
import openai

load_dotenv()


class TodoItemView(APIView):
    serializer_class = TodoItemSerializer
    permission_classes = (IsAuthenticated, )

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            task = serializer.save(user=request.user)
            self.process_task(task)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        queryset = self.get_queryset()
        serializer = TodoItemSerializer(queryset, many=True)
        return Response(serializer.data)

    def put(self, request, pk):
        todo_item = self.get_object(pk)
        serializer = TodoItemSerializer(todo_item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save(is_completed=True)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        todo_item = self.get_object(pk)
        if todo_item:
            todo_item.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def get_queryset(self):
        return TodoItem.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_object(self, pk):
        try:
            return TodoItem.objects.get(pk=pk, user=self.request.user)
        except TodoItem.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def process_task(self, task):
        openai.api_key = os.environ.get('OPENAI_KEY')
        response = openai.completions.create(
            model="gpt-3.5-turbo",
            prompt=task.text,
            temperature=0.7,
            max_tokens=100,
        )
        processed_text = response.choices[0].text

        task.processed_text = processed_text
        task.save()
