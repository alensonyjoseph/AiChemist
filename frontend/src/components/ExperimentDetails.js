// ExperimentDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ExperimentDetail.css'; // Importing CSS file

function ExperimentDetail() {
    let { id } = useParams();
    const [experiment, setExperiment] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/experiments/${id}`)
        .then(response => {
            setExperiment(response.data);
        })
        .catch(error => {
            console.error(`Error fetching experiment with ID: ${id}`, error);
        });
    }, [id]);

    return (
        <div>
            <h2>Experiment Details</h2>
            <table className="experiment-details-table">
                <thead>
                    <tr>
                        <th className="name-column">Name</th>
                        <th className="investigator-column">Investigator</th>
                        <th className="aim-column">Aim</th>
                        <th className="explanation-column">Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    {experiment ? (
                        <tr>
                            <td>{experiment.name}</td>
                            <td>{experiment.investigator}</td>
                            <td>{experiment.aim}</td>
                            <td>{experiment.explanation || experiment.description}</td>
                        </tr>
                    ) : (
                        <tr>
                            <td colSpan="4">No experiment details available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ExperimentDetail;
