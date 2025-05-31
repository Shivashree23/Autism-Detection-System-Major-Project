import pickle
import numpy as np
import os

model_path = os.path.join(os.path.dirname(__file__), 'autism_model.pkl')

# Load the saved model
with open(model_path, 'rb') as f:
    model = pickle.load(f)

# Predict using the model
def predict_autism(features: list):
    features_array = np.array(features).reshape(1, -1)
    prediction = model.predict(features_array)[0]
    probability = model.predict_proba(features_array)[0][1]  # Probability of class '1'
    return int(prediction), float(probability)

