# Generated by Django 2.1.2 on 2018-11-19 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_auto_20181118_0410'),
    ]

    operations = [
        migrations.AddField(
            model_name='hikeuser',
            name='medical',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
