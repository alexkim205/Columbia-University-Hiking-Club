# Generated by Django 2.1.2 on 2018-11-05 06:59

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20181105_0545'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hikebase',
            name='hike_leaders',
            field=models.ManyToManyField(blank=True, null=True, to=settings.AUTH_USER_MODEL),
        ),
    ]