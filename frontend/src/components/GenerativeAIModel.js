// src/components/GenerativeAIModel.js
import React, { useState } from 'react';
import axios from 'axios';

function GenerativeAIModel() {
    const [smile, setSmile] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handlePredictClick = () => {
        setIsLoading(true);
        setError(""); 

        axios.post('http://localhost:5000/generate-smile', { smile: smile })
        .then(response => {
            setIsLoading(false);
            if (response.data.error) {
                setError(response.data.error);
            } else {
                setResults(response.data);
            }
        })
        .catch(error => {
            setIsLoading(false);
            setError(`Error: ${error.message}`);
        });
    };

    return (
        <div className="generative-ai-model">
            <h1>Generative AI Model</h1>
            <input 
                type="text" 
                value={smile} 
                onChange={e => setSmile(e.target.value)} 
                placeholder="Enter SMILE..." 
            />
            <button onClick={handlePredictClick} disabled={isLoading}>
                {isLoading ? "Predicting..." : "Predict"}
            </button>
            {error && <div className="error-message">{error}</div>}
            {results.map((result, index) => (
                <div key={index}>
                    <p><strong>Sequence:</strong> {result.sequence}</p>
                    <p><strong>Score:</strong> {result.score}</p>
                    <p><strong>Token:</strong> {result.token}</p>
                    <p><strong>Token String:</strong> {result.token_str}</p>
                </div>
            ))}
        </div>
    );
}

export default GenerativeAIModel;
