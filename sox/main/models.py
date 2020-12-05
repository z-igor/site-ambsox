from PIL import Image
from django.db import models


class Discount(models.Model):
    discount_rate = models.PositiveIntegerField(default=5)
    image = models.ImageField(upload_to='static/discount')

    def __str__(self):
        return f'{self.discount_rate}%'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        if self.image:
            img = Image.open(self.image.path)

            width, height = img.size
            ratio = round(height / width)
            newheight = ratio * 300

            img = img.resize((500, 500), Image.ANTIALIAS)
            img.save(self.image.path)

    class Meta:
        verbose_name = verbose_name_plural = 'Discount'


class Sox(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    price = models.TextField()
    image = models.ImageField(upload_to='static/sox')
    fabrics = models.TextField()
    size = models.TextField()
    discount = models.ForeignKey(Discount, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        if self.image:
            img = Image.open(self.image.path)

            width, height = img.size
            ratio = round(height / width)
            newheight = ratio * 300

            img = img.resize((500, 500), Image.ANTIALIAS)
            img.save(self.image.path)

    class Meta:
        verbose_name = verbose_name_plural = 'Sox'
