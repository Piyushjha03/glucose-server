import sys
import joblib
import numpy as np
import pandas as pd
import os
def predict_glucose(IR1, IR2, IR3, IR4, IR5):
    # Load the model

    model_path = os.path.join(os.path.dirname(__file__), 'glucose_model.pkl')
    model = joblib.load(model_path)

    
    # Create input array
    input_data = pd.DataFrame([[IR1, IR2, IR3, IR4, IR5]], 
                             columns=['IR1', 'IR2', 'IR3', 'IR4', 'IR5'])
    
    # Make prediction
    prediction = model.predict(input_data)[0]
    return prediction

if __name__ == "__main__":
    # Get input values from command line arguments
    IR1 = float(sys.argv[1])
    IR2 = float(sys.argv[2])
    IR3 = float(sys.argv[3])
    IR4 = float(sys.argv[4])
    IR5 = float(sys.argv[5])
    
    # Make prediction and print result
    result = predict_glucose(IR1, IR2, IR3, IR4, IR5)
    print(result)