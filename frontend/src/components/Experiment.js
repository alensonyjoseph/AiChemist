import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ExperimentCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #282c34;
    padding: 20px;
    margin-bottom: 20px;
    width: 70%;
`;

const ExperimentTitle = styled.h2`
    color: #282c34;
`;

const ExperimentInvestigator = styled.h3`
    color: #282c34;
`;

const ExperimentDescription = styled.p`
    color: #282c34;
`;

const Button = styled.button`
    color: white;
    background-color: #282c34;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 2px;
    cursor: pointer;
    transition-duration: 0.4s;

    &:hover {
        background-color: #61dafb;
        color: black;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

function Experiment({ experiment, addExperimentDetails }) {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState(experiment.name);
    const [aim, setAim] = useState('');
    const [explanation, setExplanation] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowForm(false);
        addExperimentDetails(experiment.id, { name, aim, explanation });
    };

    return (
        <ExperimentCard>
            <ExperimentTitle>{name}</ExperimentTitle>
            <ExperimentInvestigator>{experiment.investigator}</ExperimentInvestigator>
            <ExperimentDescription>{experiment.description}</ExperimentDescription>
            <ButtonContainer>
                <Link to={`/experiments/${experiment.id}`}>
                    <Button>View Details</Button>
                </Link>
                <Button onClick={() => setShowForm(!showForm)}>Update Details</Button>
            </ButtonContainer>
            {showForm && (
                <Form onSubmit={handleFormSubmit}>
                    <label>Name: <input type="text" value={name} onChange={e => setName(e.target.value)} /></label>
                    <label>Aim: <input type="text" value={aim} onChange={e => setAim(e.target.value)} /></label>
                    <label>Explanation: <input type="text" value={explanation} onChange={e => setExplanation(e.target.value)} /></label>
                    <Button type="submit">Submit</Button>
                </Form>
            )}
        </ExperimentCard>
    );
}

export default Experiment;
