import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.utils import resample
from sklearn.calibration import CalibratedClassifierCV
import pickle
import os

# Load dataset
df = pd.read_csv("Toddler_Autism_dataset_July_2018.csv")
df.columns = df.columns.str.strip()
df['Class/ASD Traits'] = df['Class/ASD Traits'].map({'Yes': 1, 'No': 0})

# Balance dataset
autism = df[df['Class/ASD Traits'] == 1]
non_autism = df[df['Class/ASD Traits'] == 0]
autism_downsampled = resample(autism, replace=False, n_samples=len(non_autism), random_state=42)
balanced_df = pd.concat([autism_downsampled, non_autism])

print("Balanced class counts:")
print(balanced_df['Class/ASD Traits'].value_counts())

# Features and labels
X = balanced_df[[f'A{i}' for i in range(1, 11)]]
y = balanced_df['Class/ASD Traits']

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)

# Calibrated Logistic Regression
base_model = LogisticRegression(max_iter=1000)
model = CalibratedClassifierCV(base_model, cv=5)
model.fit(X_train, y_train)

# Save
os.makedirs("backend/model", exist_ok=True)
with open("backend/model/autism_model1.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ Calibrated model trained and saved.")

