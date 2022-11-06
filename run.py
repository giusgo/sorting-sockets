from application import create_app
from flask_socketio import SocketIO, send 

app = create_app()
#app.config["SECRET_KEY"] = "tu_mama"
socketio = SocketIO(app)

from application.routes import *

if __name__ == "__main__":
    
    app.run(debug=True)