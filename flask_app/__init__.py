from flask import Flask
from flask_bcrypt import Bcrypt
import os
app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = os.path.realpath(
    os.getcwd() + '/flask_app/static/uploads')

app.secret_key = "studiozcommentablelikeswithflask"

bcrypt = Bcrypt(app)
