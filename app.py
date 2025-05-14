from flask_app import app
from flask import Flask
from flask import render_template, redirect, session
from flask_app.controllers import users, comments, likes

if __name__=="__main__":
    app.run(debug=True)
    
app = Flask(__name__)

# @app.route('/')
# def home():
#     return 'Hello from Flask on DreamHost!'