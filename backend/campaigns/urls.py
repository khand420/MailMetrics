from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from campaigns.views import CampaignViewSet, EmailRecordViewSet, DailyReportViewSet

router = DefaultRouter()
router.register('campaigns', CampaignViewSet)
router.register('emails', EmailRecordViewSet)
router.register('reports', DailyReportViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
