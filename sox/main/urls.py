from django.urls import path
from rest_framework import routers

from .views import DiscountViewSet, SoxViewSet

router = routers.DefaultRouter()
router.register('discounts', DiscountViewSet, basename='articles')
router.register('sox', SoxViewSet, basename='themes')

urlpatterns = router.urls