import qrcode
import os
from dotenv import load_dotenv
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from oauth2client.service_account import ServiceAccountCredentials
# from models import db, QRCode
import uuid

load_dotenv()
NUMBER = os.getenv("Whatsapp_Number")

def generate_qr(product_name: str, quantity: int, company_prefix: str):
    os.makedirs('qrcodes', exist_ok=True)
    qr_images = []
    
    # Ensure prefix is uppercase and remove any special characters if needed
    company_prefix = company_prefix.upper().replace("$", "")  # e.g., "$AMAZON" -> "AMAZON"
    
    for _ in range(quantity):
        # Generate base unique code (e.g., "2W2GA")
        base_code = str(uuid.uuid4())[:5].upper()  # 5 chars for brevity, adjust as needed
        
        # Combine with company prefix (e.g., "AMAZON-2W2GA")
        unique_code = f"{company_prefix}-{base_code}"
        
        # Create DB entry and get serial number
        # qr_entry = QRCode(
        #     unique_code=unique_code,
        #     company_prefix=company_prefix,
        #     product_name=product_name
        # )
        # db.session.add(qr_entry)
        # db.session.commit()
        
        # serial_number = f"SN{qr_entry.id:06d}"
        
        url = f"https://wa.me/{NUMBER}?text={unique_code}%20{product_name}"
        qr = qrcode.QRCode(version=1, box_size=10, border=4)
        qr.add_data(url)
        qr.make(fit=True)
        img_path = f"qrcodes/qr_{unique_code}.png"
        img = qr.make_image(fill='black', back_color='white')
        img.save(img_path)
        qr_images.append((unique_code, img_path,))
    
    return qr_images

def generate_pdf(qr_data):
    pdf_path = 'qr_codes.pdf'
    c = canvas.Canvas(pdf_path, pagesize=letter)
    width, height = letter
    x, y = 50, height - 50
    items_per_row = 5
    row_height = 120

    for i, (code, img_path, serial) in enumerate(qr_data):
        if i % items_per_row == 0 and i > 0:
            y -= row_height
        if y < 50:
            c.showPage()
            y = height - 50
        
        c.drawImage(img_path, x + (i % items_per_row) * 100, y - 80, width=80, height=80)
        c.drawString(x + (i % items_per_row) * 100, y - 90, f"Code: {code}")
        # c.drawString(x + (i % items_per_row) * 100, y - 100, f"Serial: {serial}")
    
    c.save()
    return pdf_path

def upload_to_drive(pdf_path: str):

    scope = ["https://www.googleapis.com/auth/drive"]
    creds = ServiceAccountCredentials.from_json_keyfile_name("credentials.json", scope)
    drive_service = build('drive', 'v3', credentials=creds)
    
    file_metadata = {
        'name': 'qr_codes.pdf',
        'mimeType': 'application/pdf'
    }
    media = MediaFileUpload(pdf_path, mimetype='application/pdf')
    file = drive_service.files().create(
        body=file_metadata,
        media_body=media,
        fields='id'
    ).execute()
    
    file_id = file.get('id')
    drive_service.permissions().create(
        fileId=file_id,
        body={'role': 'reader', 'type': 'anyone'}
    ).execute()
    
    return f"https://drive.google.com/file/d/{file_id}/view"



