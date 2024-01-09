from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .serializer import RegisterSerializer, VerifyEmailSerializer


class RegisterView(APIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            # send_verification_email(user) # отправка письма
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VerifyEmailView(APIView):

    def post(self, request):
        serializer = VerifyEmailSerializer(data=request.data)
        if serializer.is_valid():
            try:
                token = serializer.data['token']
                user = User.objects.get(email_verify_token=token)
                user.mark_email_verified()

                return Response({'email': 'Успешно подтвержден'}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({'errors': str(e)}, status=status.HTTP_400_BAD_REQUEST)
