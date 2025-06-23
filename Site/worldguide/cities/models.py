from django.db import models

class City(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название города")
    country = models.CharField(max_length=100, verbose_name="Страна")
    description = models.TextField(verbose_name="Описание")
    main_attraction = models.CharField(max_length=200, verbose_name="Главная достопримечательность")
    best_time_to_visit = models.CharField(max_length=100, verbose_name="Лучшее время для посещения")
    photo = models.ImageField(upload_to='cities/', verbose_name="Фото", blank=True, null=True)
    
    def __str__(self):
        return f"{self.name}, {self.country}"

    class Meta:
        verbose_name = "Город"
        verbose_name_plural = "Города"