import pickle
import numpy as np
import pandas as pd

# Load the model
with open("backend/model/autism_model1.pkl", "rb") as f:
    model = pickle.load(f)

# Use the same feature names from training
FEATURE_NAMES = [f'A{i}' for i in range(1, 11)]

# Create test inputs (change values to experiment)
input_1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  # Should predict 0
input_2 = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  # Should predict 1
input_3 = [1, 2, 0, 3, 2, 1, 0, 3, 1, 2]  # Mixed

def test_prediction(input_values):
    input_df = pd.DataFrame([input_values], columns=FEATURE_NAMES)
    pred = model.predict(input_df)[0]
    prob = model.predict_proba(input_df)[0][1]
    print(f"Input: {input_values}")
    print(f"Prediction: {'Likely Autism' if pred == 1 else 'Unlikely Autism'}")
    print(f"Confidence: {prob * 100:.2f}%")
    print('-' * 40)

# Run tests
test_prediction(input_1)
test_prediction(input_2)
test_prediction(input_3)

