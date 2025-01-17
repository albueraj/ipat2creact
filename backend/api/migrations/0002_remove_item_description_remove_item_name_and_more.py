# Generated by Django 5.0.4 on 2024-06-22 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='description',
        ),
        migrations.RemoveField(
            model_name='item',
            name='name',
        ),
        migrations.AddField(
            model_name='item',
            name='address',
            field=models.TextField(default='123 Default St'),
        ),
        migrations.AddField(
            model_name='item',
            name='email',
            field=models.EmailField(default='Default Value', max_length=254, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='item',
            name='first_name',
            field=models.CharField(default='John', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='last_name',
            field=models.CharField(default='Doe', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='middle_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='phone',
            field=models.CharField(default='000-000-0000', max_length=15),
        ),
    ]
