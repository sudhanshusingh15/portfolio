import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes, css }from "styled-components";
import { TopSection } from "./topSection";
import { Navbar } from "../../containers/navBar/index.jsx";

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    height: 300vh;
    background: #000;
`;

const Title = styled.h1`
    font-family: acorn, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    letter-spacing: -4px;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    margin-top: 20px; 
    padding: 0; 
    border: 1px solid red;
    width: 100%;
    height: auto;

    ${props => css`
        font-size: ${props.fontSize || "170px"};
        font-weight: ${props.fontWeight || "600"};
        color: ${props.color || "white"};
    `}
`;

const Text = styled.p`
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: -0.3px;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;    
    text-align: center;
    margin: 0;
    padding: 5px;
    
    ${props => css`
        font-size: ${props.fontSize || "30px"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
    `}
`;

const WorkContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 90%;
    height: auto;
    margin-bottom: 7em;
    border: 5px solid green;


`;

const IndividualWorkContainer = styled.div`
    height: 62.5vh;
    border: 2px solid red;
    ${props => css`
        width: ${props.width || "50vw"};
    `}

`;
const Work = styled.div`
    width: 100%; 
    height: 100%; 
    background-color: #ccc; 
    border-radius: 8px; 
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
    will-change: transform, box-shadow;

    &:hover {
        transform: translateY(-5px); 
        box-shadow: -1px 10px 12px rgba(255,255,0,0.7); 
    }
`;

export function HomePage(props) {
    return (
        <HomePageContainer className="HomePageContainer">
           <Navbar />
            <TopSection />
            <Title fontSize="70px">Latest Work</Title>
            <WorkContainer>
                <IndividualWorkContainer className="ChaiMoh" width="34.623%">
                    <Work>

                    </Work>
                </IndividualWorkContainer>
                <IndividualWorkContainer className="Dukaan" width="57.8%">
                    <Work>

                    </Work>
                </IndividualWorkContainer>
            </WorkContainer>
            <WorkContainer>
                <IndividualWorkContainer className="DigitalPathology" width="57.8%">
                    <Work>

                    </Work>
                </IndividualWorkContainer>
                <IndividualWorkContainer className="GCI" width="34.623%">
                    <Work>

                    </Work>
                </IndividualWorkContainer>
            </WorkContainer>
        </HomePageContainer>
    );
}