import uuid
from utils.generate_qr import generate_qr, generate_pdf, upload_to_drive
from flask import Blueprint, request, jsonify
import os

#GENERATE QR CODE 
def generate_qr_code():
    try:
        product_name = request.form.get('product_name')
        quantity = request.form.get('quantity')
        
        if not product_name or not quantity:
            return jsonify({"error": "Missing product_name or quantity"}), 400
        
        try:
            quantity = int(quantity)
            if quantity <= 0:
                raise ValueError
        except ValueError:
            return jsonify({"error": "Quantity must be a positive integer"}), 400

        # Generate unique code for this batch
        code = str(uuid.uuid4())[:8]
        serial_number = "SN001"  # You can modify this as needed
        
        # Generate QR codes which returns the array of generated QR images path
        qr_images = generate_qr(product_name, quantity, code, serial_number)
        
        # Generate PDF
        pdf_path = generate_pdf(qr_images)
        
        # Upload to Google Drive
        drive_link = upload_to_drive(pdf_path)
        
        # Clean up temporary files
        for _, img_path in qr_images:
            if os.path.exists(img_path):
                os.remove(img_path)
        if os.path.exists(pdf_path):
            os.remove(pdf_path)

        return jsonify({
            "message": "QR codes generated successfully",
            "download_link": drive_link
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500