from rest_framework import serializers

from .models import Discount, Sox


class DiscountSerializers(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = ('discount_rate', 'image')


class SoxSerializers(serializers.ModelSerializer):
    class Meta:
        model = Sox
        fields = ('title', 'description', 'price', 'image', 'fabrics', 'size', 'discount',)
 