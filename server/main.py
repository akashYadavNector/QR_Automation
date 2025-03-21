# coding: utf-8
from flask import Flask
from routes.generate_qr_api_endpoints import generate_qr_code
from routes.generate_qr_api_endpoints import qr_bp

app = Flask(__name__)

# Register blueprints
app.register_blueprint(qr_bp)

@app.route('/')
def home():
    return "Hey I'm working Perfectly fine"

# print("hello buddyyyy")
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)