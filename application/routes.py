import sys 
sys.path.insert(1,"run.py")

from run import app
from run import socketio
from flask import render_template
from flask_socketio import send
from application.static.python.libserver import *

@app.route("/")
def root():
    
    return render_template("index.html")

@socketio.on("message")
def handle_client_message(request: dict): 
    
    client_request = request.get("request")
    
    if client_request == "heapsort": 
        
        ... 
    
    if client_request == "mergesort": 
        
        vector = list(map(lambda number: int(number), request.get("vector").split(",")))
        
        result = merge_sort(vector)
        
        send(result)
    
    if client_request == "quicksort_left":
        
        ... 
    
    if client_request == "quicksort_right": 
        
        ...
    
    if client_request == "quicksort":
        
        ...

    