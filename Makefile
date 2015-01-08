MANAGE=django-admin.py
ROOT_DIR=`pwd`

test:
	PYTHONPATH=`pwd` DJANGO_SETTINGS_MODULE=django_angular_backend.settings $(MANAGE) test app

local_test:
	. $(ROOT_DIR)/.env/bin/activate; PYTHONPATH=`pwd` DJANGO_SETTINGS_MODULE=django_angular_backend.settings $(MANAGE) test app

js_test:
	. $(ROOT_DIR)/.env/bin/activate; PYTHONPATH=`pwd` DJANGO_SETTINGS_MODULE=django_angular_backend.settings JS_TEST=True $(MANAGE) runserver

run:
	. $(ROOT_DIR)/.env/bin/activate; PYTHONPATH=`pwd` DJANGO_SETTINGS_MODULE=django_angular_backend.settings $(MANAGE) runserver

syncdb:
	PYTHONPATH=`pwd` DJANGO_SETTINGS_MODULE=django_angular_backend.settings $(MANAGE) syncdb --noinput


install:
	virtualenv --no-site-packages .env
	. $(ROOT_DIR)/.env/bin/activate; pip install -r $(ROOT_DIR)/requirements.txt
	. $(ROOT_DIR)/.env/bin/activate; make syncdb


