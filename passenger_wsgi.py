# # passenger_wsgi.py

# import os
# import sys

# # 1) Add the project root to sys.path
# project_root = os.path.dirname(__file__)
# if project_root not in sys.path:
#     sys.path.insert(0, project_root)

# # 2) Add your 'flask.app' package path so Python can import it
# app_pkg = os.path.join(project_root, 'flask.app')
# if app_pkg not in sys.path:
#     sys.path.insert(0, app_pkg)

# # 3) (Optional) Activate your virtualenv, if you have one at ./venv/
# venv_activate = os.path.join(project_root, 'venv', 'bin', 'activate_this.py')
# if os.path.exists(venv_activate):
#     with open(venv_activate) as f:
#         exec(f.read(), {'__file__': venv_activate})

# # 4) Import the Flask app from server.py and expose it as 'application'
# #    (Passenger looks for a WSGI callable named 'application')
# from server import app as application

# # 5) Override Flask’s template/static folders to point inside flask.app/
# #    (Only needed if server.py used the defaults and your templates/static
# #     live under flask.app/)
# application.template_folder = os.path.join(app_pkg, 'templates')
# application.static_folder   = os.path.join(app_pkg, 'static')

import sys, os

INTERP = os.path.expanduser("~/venv/bin/python3")
if sys.executable != INTERP:
    os.execl(INTERP, INTERP, *sys.argv)

sys.path.insert(0, os.getcwd())

from app import app as application
