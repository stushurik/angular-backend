from django.conf import settings


def js_testing(context):
    return {'IS_JS_TEST': settings.IS_JS_TEST}