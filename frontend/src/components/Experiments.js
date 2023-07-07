import React from 'react';
import styled from 'styled-components';
import Experiment from './Experiment';

const ExperimentsPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
`;

function Experiments() {
    // This data would typically come from an API
    const experimentsData = [
        {
            name: 'Experiment 1',
            investigator: 'Investigator 1',
            description: 'This is a description of the experiment.'
        },
        // Add more experiment data here...
    ];

    return (
        <ExperimentsPage>
            {experimentsData.map((experiment, index) => (
                <Experiment key={index} experiment={experiment} />
            ))}
        </ExperimentsPage>
    );
}

export default Experiments;
