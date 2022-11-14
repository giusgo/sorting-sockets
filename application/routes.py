import sys 
sys.path.insert(1,"run.py")

from run import app
from run import socketio
from flask import render_template
from flask_socketio import send, emit
from application.static.python.libserver import *

@app.route("/")
def root():
    
    return render_template("index.html")

@socketio.on("vector")
def handle_client_message(request: dict): 
    
    client_request = request.get("request")
    
    vector = list(map(lambda number: float(number), request.get("vector").split(",")))
    
    if client_request == "heapsort": 
        
        result = heap_sort(vector)
        
        emit("vector", result)
    
    if client_request == "mergesort": 
        
        result = merge_sort(vector)
        
        emit("vector", result)
    
    if client_request == "quicksort_left":
        
        result = quick_sort(vector, 0, len(vector) - 1, "left")
        
        emit("vector", result)
    
    if client_request == "quicksort_right": 
        
        result = quick_sort(vector, 0, len(vector) - 1, "right")
        
        emit("vector", result)
    
    if client_request == "quicksort_median":
        
        vector = list(map(lambda number: int(number), request.get("vector").split(",")))
        
        result = quick_sort(vector, 0, len(vector) - 1, "median")
        
        emit("vector", result)


@socketio.on("random")
def create_vector(request: dict):
    
    size = int(request.get("size"))
    min_number = int(request.get("min_number"))
    max_number = int(request.get("max_number"))
    
    result = generate_vector(size, min_number, max_number)
    
    emit("random", result)