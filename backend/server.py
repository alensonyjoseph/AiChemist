from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
from database import create_tables, insert_compound, get_all_compounds, update_compound_description, delete_compound

app = Flask(__name__)
CORS(app)

fill_mask = pipeline(
    "fill-mask",
    model="seyonec/PubChem10M_SMILES_BPE_450k",
    tokenizer="seyonec/PubChem10M_SMILES_BPE_450k"
)

@app.route('/generate-smile', methods=['POST'])
def generate_smile():
    try:
        data = request.get_json()
        smile = data.get('smile', '')
        result = fill_mask(smile)

        description = "Generated using Generative AI Model"
        insert_compound(smile, description)

        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/compounds', methods=['GET'])
def get_compounds():
    compounds = get_all_compounds()
    return jsonify(compounds)

@app.route('/compounds/<int:compound_id>', methods=['PUT'])
def update_description(compound_id):
    data = request.get_json()
    description = data['description']
    update_compound_description(compound_id, description)
    return jsonify({"message": "Description updated successfully!"})

@app.route('/compounds/<int:compound_id>', methods=['DELETE'])
def delete_single_compound(compound_id):
    delete_compound(compound_id)
    return jsonify({"message": "Compound deleted successfully!"})

if __name__ == "__main__":
    create_tables()
    app.run(debug=False, port=5000)
