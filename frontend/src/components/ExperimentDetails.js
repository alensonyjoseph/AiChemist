import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ExperimentDetails({ addExperimentDetails }) {
    let { id } = useParams();
    const navigate = useNavigate();

    // Add new state variables for experiment details
    const [name, setName] = useState('');
    const [aim, setAim] = useState('');
    const [explanation, setExplanation] = useState('');

    const handleDetailsSubmit = (e) => {
        e.preventDefault();

        // Check if addExperimentDetails is a function before calling it
        if (typeof addExperimentDetails === "function") {
            // Call the addExperimentDetails function passed as props to store the new details
            addExperimentDetails(id, { name, aim, explanation });

            // Navigate back to /experiments after submission
            navigate('/experiments');
        } else {
            console.error("addExperimentDetails is not a function");
        }
    };

    return (
        <div className="experiment-details">
            <h2>Experiment {id}</h2>
            <form onSubmit={handleDetailsSubmit}>
                <label>Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>Aim:
                    <input type="text" value={aim} onChange={(e) => setAim(e.target.value)} />
                </label>
                <label>Explanation:
                    <input type="text" value={explanation} onChange={(e) => setExplanation(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ExperimentDetails;
