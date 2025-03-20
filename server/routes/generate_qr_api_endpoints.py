from flask import Blueprint
from controllers.generate_qr_api import generate_qr_code

qr_bp = Blueprint('qr', __name__)

qr_bp.route('/generate_qr', methods=['POST'])(generate_qr_code)