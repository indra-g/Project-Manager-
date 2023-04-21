from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
import flask_cors

flask_cors.cross_origin(
origins = '*',
methods = ['GET', 'HEAD', 'POST', 'OPTIONS', 'PUT'],
headers = None,
supports_credentials = False,
max_age = None,
send_wildcard = True,
always_send = True,
automatic_options = False
)


app = Flask(__name__)
CORS(app)
model = joblib.load("model.pkl")

@app.route('/')
@flask_cors.cross_origin()
def index():
    result = predict()
    return result

@app.route('/predict', methods=['POST', 'GET'])
@flask_cors.cross_origin()
def predict():
    data = request.get_json()
    for i in range(len(data)):
        data[i] = float(data[i])

    # data = np.array([[1.1000e+01, 3.0000e+00, 1.0000e+00, 1.0000e+00, 2.4000e+01,
    #     9.6000e+01, 1.6000e-01, 6.4300e+00, 1.4930e+01, 6.1714e+02,
    #     3.0000e-02, 3.4290e+01, 6.0000e+00, 0.0000e+00, 2.0000e+00,
    #     0.0000e+00]]) # model accepts only 2d array as input

    prediction = model.predict([data])
    
    response = {
        'prediction': prediction.tolist()
    }
    
    print(response)
    res = jsonify(response)
    
    return res

if __name__ == '__main__':
    
    app.run(debug=True)
