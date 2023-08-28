from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.db.models.signals import pre_save
from django.dispatch import receiver


import uuid


class User(AbstractUser):
    email = models.EmailField(unique=True)
    # token = models.UUIDField()

    def __str__(self):
        return self.email

    @classmethod
    def get_token(cls):
        return uuid.uuid4()


# router to listen to models' actions, if function registered will go through hoop first
@receiver(pre_save, sender=User)
def user_saved(sender, instance, *args, **kwargs):
    instance.token = instance.get_token()


class Task(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    in_unfinished_priorities = models.BooleanField(default=False)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="priorities",
        null=True,
    )

    def __str__(self):
        return self.name
