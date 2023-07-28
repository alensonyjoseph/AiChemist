// src/components/ExperimentDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

    if (!experiment) {
        return <p>Loading...</p>;
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
