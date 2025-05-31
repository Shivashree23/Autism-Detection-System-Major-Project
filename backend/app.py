from flask import Flask, request, jsonify
from flask_cors import CORS
from model.model import predict_autism
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash


app = Flask(__name__)
CORS(app)  # Allow requests from frontend

# === Database Config ===
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

# === User Model ===
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(200))

# === Create tables ===
@app.before_request
def create_tables():
    db.create_all()

# === Signup Route ===
@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    full_name = data.get('fullName')
    email = data.get('email')
    password = data.get('password')

    if not full_name or not email or not password:
        return jsonify({'message': 'Missing fields'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'User already exists'}), 400

    hashed_pw = generate_password_hash(password)
    new_user = User(full_name=full_name, email=email, password=hashed_pw)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'}), 201

# === Login Route ===
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Missing fields'}), 400

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        return jsonify({'email': user.email}), 200

    return jsonify({'message': 'Invalid credentials'}), 401


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    answers = data.get('answers')

    if not answers or not isinstance(answers, list):
        return jsonify({'error': 'Invalid input'}), 400

    try:
        result, probability = predict_autism(answers)
        return jsonify({'result': result, 'probability': probability})

       
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
