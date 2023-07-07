import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background-color: #282c34;
    color: white;
`;

const StyledLink = styled(Link)`
    color: white;
    margin-right: 15px;
    text-decoration: none;

    &:hover {
        color: #61dafb;
    }
`;

function Navbar() {
    return (
        <Nav>
            <div className="logo">AiChemist</div>
            <div className="nav-links">
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/experiments">Experiments</StyledLink>
            </div>
        </Nav>
    );
}

export default Navbar;
