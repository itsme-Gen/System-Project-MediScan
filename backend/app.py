
from flask import Flask, request, jsonify
from PIL import Image
import numpy as np
from model import load_model
from flask_cors import CORS
from keras.applications.mobilenet_v2 import preprocess_input
import io

app = Flask(__name__)
CORS(app)

# Load your trained model weights
model = load_model()
model.load_weights("id_classifier_weights.weights.h5") # Make sure you have trained weights

# Preprocess image for MobileNetV2
def preprocess_image(image_bytes):
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    img = img.resize((224, 224))
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)  # correct preprocessing for MobileNetV2
    return img_array

@app.route("/classify", methods=["POST"])
def classify_image():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    img_bytes = file.read()
    img = preprocess_image(img_bytes)
    
    prediction = model.predict(img)[0][0]
    
    result = "ID" if prediction < 0.5 else "Not ID" 
    
    # Return both label and confidence for debugging
    return jsonify({
        "prediction": result, 
        "confidence": float(prediction),
        "raw_score": f"Raw prediction: {prediction:.4f} ({'ID' if prediction < 0.5 else 'Not ID'})"
    })

if __name__ == "__main__":
    app.run(debug=True)