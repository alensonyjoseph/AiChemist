import React from 'react';
import { useParams } from 'react-router-dom';

function ExperimentDetails() {
    let { id } = useParams();

    // Here, we would fetch the experiment details from the server using the id
    // For now, we're just using some dummy data
    const experiment = {
        name: 'Experiment ' + id,
        investigator: 'Investigator ' + id,
        description: 'This is a detailed description of Experiment ' + id,
        participants: ['Participant 1', 'Participant 2', 'Participant 3']
    };

    return (
        <div className="experiment-details">
            <h2>{experiment.name}</h2>
            <h3>Conducted by: {experiment.investigator}</h3>
            <p>{experiment.description}</p>
            <h3>Participants:</h3>
            <ul>
                {experiment.participants.map((participant, index) => (
                    <li key={index}>{participant}</li>
                ))}
            </ul>
            <button className="join-experiment">Join Experiment</button>
        </div>
    );
}

export default ExperimentDetails;
