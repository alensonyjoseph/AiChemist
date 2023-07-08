// File name: Experiment.js

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

const ExperimentDescription = styled.div`
    color: #282c34;
`;

const LabelText = styled.span`
    font-weight: bold;
    margin-right: 10px;
`;

const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
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
    const [investigator, setInvestigator] = useState(experiment.investigator);
    const [aim, setAim] = useState(experiment.aim || ''); 
    const [explanation, setExplanation] = useState(experiment.explanation || ''); 
    const [featured, setFeatured] = useState(experiment.featured || false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addExperimentDetails(experiment.id, { name, investigator, aim, explanation, featured });
        setShowForm(false);
    };

    return (
        <ExperimentCard>
            <ExperimentTitle>{name}</ExperimentTitle>
            <ExperimentInvestigator>Investigator: {investigator}</ExperimentInvestigator>
            <ExperimentDescription>
                <LabelText>Aim:</LabelText> {aim} 
                <br/>
                <LabelText>Explanation:</LabelText> {explanation || experiment.description}
            </ExperimentDescription>
            <ButtonContainer>
                <Link to={`/experiments/${experiment.id}`}>
                    <Button>View Details</Button>
                </Link>
                <Button onClick={() => setShowForm(!showForm)}>Update Details</Button>
            </ButtonContainer>
            {showForm && (
                <Form onSubmit={handleFormSubmit}>
                    <FormLabel>
                        <LabelText>Name:</LabelText>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </FormLabel>
                    <FormLabel>
                        <LabelText>Investigator:</LabelText>
                        <input type="text" value={investigator} onChange={e => setInvestigator(e.target.value)} />
                    </FormLabel>
                    <FormLabel>
                        <LabelText>Aim:</LabelText>
                        <input type="text" value={aim} onChange={e => setAim(e.target.value)} />
                    </FormLabel>
                    <FormLabel>
                        <LabelText>Explanation:</LabelText>
                        <input type="text" value={explanation} onChange={e => setExplanation(e.target.value)} />
                    </FormLabel>
                    <FormLabel>
                        <LabelText>Featured:</LabelText>
                        <input type="checkbox" checked={featured} onChange={e => setFeatured(e.target.checked)} />
                    </FormLabel>
                    <Button type="submit">Submit</Button>
                </Form>
            )}
        </ExperimentCard>
    );
}

export default Experiment;
