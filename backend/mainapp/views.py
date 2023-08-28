from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.http.response import HttpResponseBadRequest
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


from .models import User

import json


def _find_data(request):
    """return dictionary of get/post data based on request content type"""
    if request.method in ("POST", "DELETE", "PUT"):
        content_type = request.headers.get("Content-Type", None)
        if content_type == "application/json":
            data = json.loads(request.body)
        else:
            data = request.POST
        return data
    # if GET
    else:
        if "json" in request.GET:
            data = json.loads(request.GET["json"])
        else:
            data = request.GET
        return data


#######################


@csrf_exempt
def login_user(request):
    data = _find_data(request)
    if request.method == "POST":
        email = data.get("email", False).lower()
        password = data.get("password", False)
        if not email:
            return HttpResponseBadRequest("email is required")
        if not password:
            return HttpResponseBadRequest("password is required")

    user = authenticate(username=email, password=password)
    if user is not None:
        # request.session["user_token"] = str(user.token)
        return JsonResponse(
            {"email": email, "token": user.token, "id": user.id}, status=200
        )
    else:
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return JsonResponse({}, status=404)
        return JsonResponse({}, status=403)
