from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAdminUser(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="Admin").exists()


class IsMarketingUser(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name="Marketing").exists()

    def has_object_permission(self, request, view, obj):
        # Allow GET, POST, PUT, PATCH
        if request.method in SAFE_METHODS or request.method in ["POST", "PUT", "PATCH"]:
            return True

        # Block DELETE
        if request.method == "DELETE":
            return False

        return True
