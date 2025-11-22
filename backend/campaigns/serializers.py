from rest_framework import serializers
from .models import Campaign, EmailRecord, DailyReport

class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = '__all__'

class EmailRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailRecord
        fields = '__all__'

class DailyReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyReport
        fields = '__all__'
