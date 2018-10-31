# Generated by Django 2.1.2 on 2018-10-30 21:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blog', '0004_auto_20181027_0931'),
    ]

    operations = [
        migrations.CreateModel(
            name='HikeRequest',
            fields=[
                ('hike_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='blog.Hike')),
                ('user_who_requested', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            bases=('blog.hike',),
        ),
        migrations.DeleteModel(
            name='Leader',
        ),
        migrations.AlterField(
            model_name='hike',
            name='hike_leaders',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]