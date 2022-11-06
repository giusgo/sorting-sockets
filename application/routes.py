import sys 
sys.path.insert(1,"run.py")

from run import app
from flask import render_template

@app.route("/")
def root():
    
    return render_template("index.html")

@app.route("/api/v1/", methods = ["GET"])
def get_request():
    
    return ""

@app.route("/api/v1", methods = ["POST"])
def get_post():
    
    return "OK"
