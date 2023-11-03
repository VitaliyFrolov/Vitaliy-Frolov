from django.db import models

class Work(models.Model):
    work_name = models.CharField(max_length=100)
    work_date = models.CharField(max_length=100)

    def __str__(self):
        return self.work_name
    
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    tag_1 = models.CharField(max_length=50)
    tag_2 = models.CharField(max_length=50, blank=True, null=True)
    tag_3 = models.CharField(max_length=50, blank=True, null=True)
    tag_4 = models.CharField(max_length=50, blank=True, null=True)
    tag_5 = models.CharField(max_length=50, blank=True, null=True)
    tag_6 = models.CharField(max_length=50, blank=True, null=True)
    link = models.CharField(max_length=200)

    def __str__(self):
        return self.title
    
class Stack(models.Model):
    column_1 = models.CharField(max_length=100)
    column_2 = models.CharField(max_length=100)
    column_3 = models.CharField(max_length=100)
    column_4 = models.CharField(max_length=100)
    column_5 = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.column_1} - {self.column_2} - {self.column_3} - {self.column_4} - {self.column_5}"