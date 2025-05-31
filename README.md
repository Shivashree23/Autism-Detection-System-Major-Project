# Autism-Detection-System-Major-Project

## Features
- 50-question autism screening based on AQ-50
- Calculates and shows score + interpretation of likelihood
- Login and signup functionality to take the test
- PDF download of results and selected answers
- Answers and session state are persisted locally
- Fully responsive UI (mobile-friendly)

## 📦 Requirements
Install all dependencies using the provided requirements files: requirement.txt and requirements.txt

Run:
npm install
pip install -r requirements.txt
pip install -r requirement.txt
pip install flask flask-cors flask-sqlalchemy
python app.py
npm run dev

# Login Required:
To access the test, users must be logged in. Sign-up or log in to start the test. This ensures results are stored securely and access is managed properly.

# Result Report
Once the test is completed:
A score is calculated based on the selected answers
A PDF report is generated and can be downloaded
The report includes:
Your selected answers
Final score
Model confidence
