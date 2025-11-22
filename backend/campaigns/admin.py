from django.contrib import admin
from .models import Campaign, EmailRecord, DailyReport


admin.site.register(Campaign)
admin.site.register(EmailRecord)
admin.site.register(DailyReport)
