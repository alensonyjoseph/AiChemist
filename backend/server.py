from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)  # enable CORS

fill_mask = pipeline(
    "fill-mask",
    model="seyonec/PubChem10M_SMILES_BPE_450k",
    tokenizer="seyonec/PubChem10M_SMILES_BPE_450k"
)

@app.route('/generate-smile', methods=['POST'])
def generate_smile():
    data = request.get_json() 
    smile = data['smile'] if 'smile' in data else ''
    result = fill_mask(smile)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=False, port=5000)
