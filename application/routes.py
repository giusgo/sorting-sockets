import sys 
sys.path.insert(1,"run.py")

from run import app
from run import socketio
from flask import render_template

@app.route("/")
def root():
    
    return render_template("index.html")

@socketio.on("message")
def handle_client_message(request: str): 
    
    print(request)