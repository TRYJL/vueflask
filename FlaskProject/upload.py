from flask import Blueprint,jsonify,request,Flask
import os
upload_bp = Blueprint('upload', __name__)
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
@upload_bp.route('/file', methods=['POST'])
def upload():
    if request.method == 'POST':
        if 'file' not in request.files:
            return jsonify({'success': False, 'message': '没有文件 part'}), 400
        file = request.files['file']
        if file.filename:
            print(file.filename)
            filepath = os.path.join(UPLOAD_FOLDER, file.filename)
            file.save(filepath)
            return "上传成功"
