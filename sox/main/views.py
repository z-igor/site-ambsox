from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from .models import Sox, Discount
from .serializers import SoxSerializers, DiscountSerializers


class DiscountViewSet(ModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = DiscountSerializers


class SoxViewSet(ModelViewSet):
    queryset = Sox.objects.all()
    serializer_class = SoxSerializers
