from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class Post(models.Model):
    title = models.CharField("タイトル", max_length=100)
    content = models.TextField("本文")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title