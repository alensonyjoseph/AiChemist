// File name: ExperimentDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DetailCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #282c34;
    padding: 20px;
    margin-bottom: 20px;
    width: 70%;
`;

const DetailTitle = styled.h2`
    color: #282c34;
`;

const DetailInvestigator = styled.h3`
    color: #282c34;
`;

const DetailAim = styled.p`
    color: #282c34;
`;

const DetailExplanation = styled.p`
    color: #282c34;
`;

function ExperimentDetail({ experimentsData }) {
    let { id } = useParams();
    id = Number(id); // Convert id to number

    // Initialize state with details of the current experiment
    const [experiment, setExperiment] = useState(experimentsData.find(experiment => experiment.id === id) || {});

    useEffect(() => {
        setExperiment(experimentsData.find(experiment => experiment.id === id) || {});
    }, [experimentsData, id]);

    if (!experiment) {
        return <p>Error: Experiment not found.</p>;
    }

    return (
        <DetailCard>
            <DetailTitle>{experiment.name}</DetailTitle>
            <DetailInvestigator>Investigator: {experiment.investigator}</DetailInvestigator>
            <DetailAim>Aim: {experiment.aim}</DetailAim>
            <DetailExplanation>Explanation: {experiment.explanation || experiment.description}</DetailExplanation>
            <Link to={`/experiments`}>Back to experiments</Link>
        </DetailCard>
    );
}

export default ExperimentDetail;