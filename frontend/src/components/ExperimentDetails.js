import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ExperimentDetails({ experimentsData, addExperimentDetails }) {
    let { id } = useParams();
    const navigate = useNavigate();
    id = Number(id); // Convert id to number

    // Initialize state with details of the current experiment
    const [experiment, setExperiment] = useState(experimentsData.find(experiment => experiment.id === id) || {});

    useEffect(() => {
        setExperiment(experimentsData.find(experiment => experiment.id === id) || {});
    }, [experimentsData, id]);

    const handleDetailsSubmit = (e) => {
        e.preventDefault();

        // Update the experiment details
        addExperimentDetails(id, experiment);

        // Navigate back to /experiments after submission
        navigate('/experiments');
    };

    const handleInputChange = (e) => {
        setExperiment({ ...experiment, [e.target.name]: e.target.value });
    };

    return (
        <div className="experiment-details">
            <h2>Experiment {id}</h2>
            <form onSubmit={handleDetailsSubmit}>
                <label>Name:
                    <input type="text" name="name" value={experiment.name || ''} onChange={handleInputChange} />
                </label>
                <label>Aim:
                    <input type="text" name="aim" value={experiment.aim || ''} onChange={handleInputChange} />
                </label>
                <label>Explanation:
                    <input type="text" name="explanation" value={experiment.explanation || ''} onChange={handleInputChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ExperimentDetails;
