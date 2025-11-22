from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticated

from .models import Campaign, EmailRecord, DailyReport
from .serializers import CampaignSerializer, EmailRecordSerializer, DailyReportSerializer
from .permissions import IsAdminUser, IsMarketingUser


class CampaignViewSet(viewsets.ModelViewSet):
    queryset = Campaign.objects.all()
    serializer_class = CampaignSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["name", "status"]

    def get_permissions(self):
        user = self.request.user

        # Admin full access
        if user.groups.filter(name="Admin").exists():
            return [IsAuthenticated(), IsAdminUser()]

        # Marketing limited access
        if user.groups.filter(name="Marketing").exists():
            return [IsAuthenticated(), IsMarketingUser()]

        # Default to authenticated only
        return [IsAuthenticated()]


class EmailRecordViewSet(viewsets.ModelViewSet):
    queryset = EmailRecord.objects.all()
    serializer_class = EmailRecordSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["recipient", "status"]

    def get_permissions(self):
        user = self.request.user

        if user.groups.filter(name="Admin").exists():
            return [IsAuthenticated(), IsAdminUser()]

        if user.groups.filter(name="Marketing").exists():
            return [IsAuthenticated(), IsMarketingUser()]

        return [IsAuthenticated()]


class DailyReportViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = DailyReport.objects.all()
    serializer_class = DailyReportSerializer
    permission_classes = [IsAuthenticated]


# >>> 
# >>> Group.objects.get_or_create(name="Admin")
# Group.objects.get_or_create(name="Marketing")
# (<Group: Admin>, True)
# >>> Group.objects.get_or_create(name="Marketing")
# (<Group: Marketing>, True)
# >>> 