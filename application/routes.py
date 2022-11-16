import sys 
sys.path.insert(1,"run.py")

from timeit import default_timer as timer

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
        
        start = timer()
        
        result = heap_sort(vector)
        
        end = timer()
        
        send_progress(len(vector))
        
        emit("vector", {"result": result, "time_elapsed": end - start})
    
    if client_request == "mergesort": 
        
        start = timer()
        
        result = merge_sort(vector)
        
        end = timer()
        
        send_progress(len(vector))
        
        emit("vector", {"result": result, "time_elapsed": end - start})
    
    if client_request == "quicksort_left":
        
        start = timer()
        
        result = quick_sort(vector, 0, len(vector) - 1, "left")
        
        end = timer()
        
        send_progress(len(vector))
        
        emit("vector", {"result": result, "time_elapsed": end - start})
    
    if client_request == "quicksort_right": 
        
        start = timer()
        
        result = quick_sort(vector, 0, len(vector) - 1, "right")
        
        end = timer()
        
        send_progress(len(vector))
        
        emit("vector", {"result": result, "time_elapsed": end - start})
    
    if client_request == "quicksort":
        
        start = timer()
        
        result = quick_sort(vector, 0, len(vector) - 1, "median")
        
        end = timer()
        
        send_progress(len(vector))
        
        emit("vector", {"result": result, "time_elapsed": end - start})


@socketio.on("random")
def create_vector(request: dict):
    
    size = int(request.get("size"))
    min_number = int(request.get("min_number"))
    max_number = int(request.get("max_number"))
    
    result = generate_vector(size, min_number, max_number)
    
    emit("random", result)

@socketio.on("progress")
def send_progress(progress: int) -> None:
    
    for i in range(progress):
        
        if i / 1000 * 100 == 25:
            
            emit("progress", 25)
        
        if i / 1000 * 100 == 50:
            
            emit("progress", 50)
        
        if i / 1000 * 100 == 75:
            
            emit("progress", 75)
        
    emit("progress", 100)