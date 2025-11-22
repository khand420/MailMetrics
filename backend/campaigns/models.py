from django.db import models

class Campaign(models.Model):
    STATUS = [
        ("draft", "Draft"),
        ("scheduled", "Scheduled"),
        ("in_progress", "In Progress"),
        ("completed", "Completed"),
    ]

    name = models.CharField(max_length=255)
    scheduled_time = models.DateTimeField()
    status = models.CharField(max_length=20, choices=STATUS, default="draft")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class EmailRecord(models.Model):
    STATUS = [
        ("pending", "Pending"),
        ("sent", "Sent"),
        ("failed", "Failed"),
    ]

    campaign = models.ForeignKey(Campaign, related_name="emails", on_delete=models.CASCADE)
    recipient = models.EmailField()
    subject = models.CharField(max_length=255)
    body = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS, default="pending")
    sent_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.recipient


class DailyReport(models.Model):
    date = models.DateField(unique=True)
    total_sent = models.IntegerField(default=0)
    failed_count = models.IntegerField(default=0)
    delivery_rate = models.FloatField(default=0)

    def __str__(self):
        return f"Report {self.date}"
