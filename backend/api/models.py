from django.db import models

class Item(models.Model):
   from django.db import models

class Item(models.Model):
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100)
    address = models.TextField()
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    telephone = models.CharField(max_length=100)
    birth_date = models.CharField(max_length=100)
    age = models.CharField(max_length=100)
    sex = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=100)
    birth_place = models.CharField(max_length=100)
    civil_status = models.CharField(max_length=100)
    citizenship = models.CharField(max_length=100)
    occupation = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)
    company_address = models.TextField()
    height = models.CharField(max_length=100)
    weight = models.CharField(max_length=100)
    blood_type = models.CharField(max_length=100)
    gsis_num = models.CharField(max_length=100)
    pagibig_num = models.CharField(max_length=100)
    philhealth_num = models.CharField(max_length=100)
    sss_num = models.CharField(max_length=100)
    tin_num = models.CharField(max_length=100)
    employee_num = models.CharField(max_length=100)

    
    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"
