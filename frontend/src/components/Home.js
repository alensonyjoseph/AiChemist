import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomePage = styled.div`
    text-align: center;
    padding: 50px;
`;

const Heading = styled.h1`
    color: #282c34;
`;

const Subtitle = styled.p`
    color: #282c34;
`;

const Button = styled.button`
    color: white;
    background-color: #282c34;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;

    &:hover {
        background-color: #61dafb;
        color: black;
    }
`;

function Home() {
    return (
        <HomePage>
            <Heading>Welcome to AiChemist</Heading>
            <Subtitle>An interactive platform for collaborative research.</Subtitle>
            <Link to="/experiments">
                <Button className="start-exploring">Start Exploring</Button>
            </Link>
        </HomePage>
    );
}

export default Home;
