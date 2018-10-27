# Generated by Django 2.1.2 on 2018-10-27 07:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Leader',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=254)),
                ('on_board', models.BooleanField(default=False)),
            ],
            options={
                'ordering': ('on_board', 'last_name'),
            },
        ),
        migrations.AlterModelOptions(
            name='hike',
            options={'ordering': ('date_of_hike',)},
        ),
        migrations.AlterField(
            model_name='hike',
            name='hike_leader',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.Leader'),
        ),
    ]
