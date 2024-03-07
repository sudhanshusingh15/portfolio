import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes, css }from "styled-components";
import { Navbar } from "../../containers/navBar/index.jsx";
import { HelloWorld } from "../../containers/helloWorld/index.jsx";


const AboutPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    height: 300vh;
    background: #000;
`;

const TextContainer = styled.div`
    width: 100%;
    height: auto; 
    display: flex;
    align-items: center; 
    justify-content: center; 
    flex-direction: column;
    border: 1px solid yellow;
    padding: 0 0 50px 0;
    position: relative;
    z-index: 2;

    
`;

const Title = styled.h1`
    font-family: acorn, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    letter-spacing: -4px;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    margin: 0; 
    padding: 0; 
   
    ${props => props.firstTitle && css`
        margin-top: 0.90em;
        margin-bottom: -0.35em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "10.625em"};
        font-weight: ${props.fontWeight || "600"};
        color: ${props.color || "white"};
    `}
`;

export function About(props) {
    return (
        <AboutPageContainer>
            <Navbar />
            <TextContainer>
                {/* <Title firstTitle>About Me</Title> */}
                <HelloWorld />
            </TextContainer>
        </AboutPageContainer>);
}
