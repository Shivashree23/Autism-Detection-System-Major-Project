import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle
import os

# Load dataset
df = pd.read_csv("Toddler_Autism_dataset_July_2018.csv")

# Fix column names
df.columns = df.columns.str.strip()

# Select Q1–Q10 columns
features = [f'A{i}' for i in range(1, 11)]
X = df[features]

# Label: strip the space in 'Class/ASD Traits '
y = df['Class/ASD Traits'].map({'Yes': 1, 'No': 0})

# Train model
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save model to backend folder
os.makedirs("backend/model", exist_ok=True)
with open("backend/model/autism_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ Model trained and saved at backend/model/autism_model.pkl")
