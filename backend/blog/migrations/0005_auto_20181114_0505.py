# Generated by Django 2.1.2 on 2018-11-14 05:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20181105_0659'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hikerequest',
            name='created_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='requests', to=settings.AUTH_USER_MODEL),
        ),
    ]