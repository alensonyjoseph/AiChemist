import React from 'react';
import styled from 'styled-components';
import Experiment from './Experiment';

const ExperimentsPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
`;

function Experiments({ experimentsData, addExperimentDetails }) {
    return (
        <ExperimentsPage>
            {experimentsData.map((experiment, index) => (
                <Experiment key={index} experiment={experiment} addExperimentDetails={addExperimentDetails} />
            ))}
        </ExperimentsPage>
    );
}

export default Experiments;
