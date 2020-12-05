from django.contrib import admin

from .models import Discount, Sox


@admin.register(Discount)
class DiscountAdmin(admin.ModelAdmin):
    list_displdasay = ('discount_rate',)


@admin.register(Sox)
class SoxAdmin(admin.ModelAdmin):
    list_displdasay = ('title', 'price', 'size',)
