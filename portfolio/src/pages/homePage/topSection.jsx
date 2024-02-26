import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes, css }from "styled-components";
import BackgroundAnimation from "../../containers/backgroundAnimation/index.jsx";
import { Navbar } from "../../containers/navBar/index.jsx";

const slideDown = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const TopSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 200vh;
    background: #000;
    
`;

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center; 
    justify-content: center; 
    flex-direction: column;
    border: 1px solid red;
    padding: 0;
    position: relative;
    z-index: 2;
    text-color: black;
    height: 100%; 
    ${props => css`
        width: ${props.width || "100%"};
        height: ${props.height || '100%'}; 
    `}
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
    opacity: 0;
    ${props => props.isTitleVisible && css`
        animation: ${slideDown} 1.5s ease forwards, fadeIn 0.5s ease forwards;
    `}
   
    ${props => props.firstTitle && css`
        margin-top: 0.40em;
        margin-bottom: -0.35em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "170px"};
        font-weight: ${props.fontWeight || "600"};
        color: ${props.color || "white"};
    `}
`;

// -webkit-text-stroke-width: 1px; \\for text border
// -webkit-text-stroke-color: red;

const Text = styled.p`
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: -0.3px;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;    
    text-align: center;
    margin: 0;
    padding: 5px;
    opacity: 0;
    ${props => props.isTextVisible && css`
        animation: ${slideDown} 1.5s ease forwards;
    `}

    ${props => props.firstText && css`
        margin-top: 0.7em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "30px"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
    `}
`;

export function TopSection(props) {
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);

    useEffect(() => {
        const titleTimer = setTimeout(() => {
            setIsTitleVisible(true);
        }, 500);

        return () => clearTimeout(titleTimer);
    }, []);

    useEffect(() => {
        if (isTitleVisible) {
            const textTimer = setTimeout(() => {
                setIsTextVisible(true);
            }, 1000);

            return () => clearTimeout(textTimer);
        }
    }, [isTitleVisible]);

    return (
        <TopSectionContainer>
            <Navbar />
            <TextContainer height="auto">
                <Title firstTitle isTitleVisible={isTitleVisible}>Hello! I am</Title>
                <Title isTitleVisible={isTitleVisible}>Sudhanshu</Title>
                <Text firstText fontSize="22px" fontWeight="0" isTextVisible={isTextVisible}>I am passionate about merging technology and user-centric design</Text>
                <Text fontSize="22px" fontWeight="0" isTextVisible={isTextVisible}>to craft seamless and intuitive digital experiences</Text>
            </TextContainer>
        </TopSectionContainer>
    );
}

