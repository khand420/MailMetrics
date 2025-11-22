from celery import shared_task
from django.core.mail import send_mail
from .models import Campaign, EmailRecord, DailyReport
from django.utils import timezone
from datetime import date

@shared_task
def send_email_task(email_id):
    email = EmailRecord.objects.get(id=email_id)
    try:
        send_mail(email.subject, email.body, "noreply@mailmetrics.com", [email.recipient])
        email.status = "sent"
        email.sent_at = timezone.now()
    except:
        email.status = "failed"
    email.save()


@shared_task
def process_campaign(campaign_id):
    campaign = Campaign.objects.get(id=campaign_id)
    campaign.status = "in_progress"
    campaign.save()

    for email in campaign.emails.all():
        send_email_task.delay(email.id)

    campaign.status = "completed"
    campaign.save()


@shared_task
def check_scheduled_campaigns():
    now = timezone.now()
    campaigns = Campaign.objects.filter(status="scheduled", scheduled_time__lte=now)

    for campaign in campaigns:
        process_campaign.delay(campaign.id)


@shared_task
def generate_daily_report():
    today = date.today()

    sent = EmailRecord.objects.filter(sent_at__date=today, status="sent").count()
    failed = EmailRecord.objects.filter(sent_at__date=today, status="failed").count()

    total = sent + failed
    rate = (sent / total * 100) if total > 0 else 0

    DailyReport.objects.update_or_create(
        date=today,
        defaults={"total_sent": sent, "failed_count": failed, "delivery_rate": rate}
    )
