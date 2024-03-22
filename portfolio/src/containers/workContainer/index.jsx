import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes, css }from "styled-components";


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

const WorkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    height: auto;
    background: #111111;
    border: 5px dotted blue;
    
`;

const TextContainer = styled.div`
    width: 100%;
    height: auto; 
    display: flex;
    align-items: center; 
    justify-content: center; 
    flex-direction: column;
    border: 1px solid red;
    padding: 0 0 50px 0;
    position: relative;
    z-index: 2;
    text-color: black;
    
`;

const WorkDetailContainer = styled.div`
    width: 65%;
    height: auto; 
    display: flex;
    align-items: center; 
    justify-content: space-around; 
    flex-direction: row;
    border: 1px solid red;
    padding: 0 0 1em 0;
    margin-bottom: 5em;
    position: relative;
    z-index: 2;
    margin-top: 1em;
    
`;

const IntroContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border: 5px solid green;

    ${props => css`
        height: ${props.height || "75vh;"};
        width: ${props.width || "85%"};
    `}

`;

const Title = styled.h1`
    font-family: acorn, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    margin: 0; 
    padding: 0; 
    opacity: 0;
    border: 1px solid green;
    ${props => props.isTitleVisible && css`
        animation: ${slideDown} 1.5s ease forwards, fadeIn 0.5s ease forwards;
    `}
   
    ${props => props.firstTitle && css`
        margin-top: 0.90em;
        margin-bottom: -0.35em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "10.625em"};
        font-weight: ${props.fontWeight || "600"};
        color: ${props.color || "white"};
        letter-spacing: ${props.letterSpacing || "0"};
    `}
`;

const Text = styled.p`
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: -0.3px;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;    
    text-align: center;
    padding: 5px;
    opacity: 0;
    ${props => props.isTextVisible && css`
        animation: ${slideDown} 1.5s ease forwards;
    `}

    ${props => props.firstText && css`
        margin-top: 0.7em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "1.875em"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
        margin: ${props.margin || "0"};
        left: ${props.left || "0"};
    `}
`;

export function WorkExpContainer(props) {
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
        <WorkContainer>
            <TextContainer>
                <Title firstTitle letterSpacing="-4px" isTitleVisible={isTitleVisible}>{props.Title}</Title>
            </TextContainer>
            <WorkDetailContainer>
                <IntroContainer height="auto" width="auto">
                    <Title isTitleVisible={isTitleVisible} fontSize="2em">Role</Title>
                    <Text isTextVisible={isTextVisible} fontSize="1.3em">{props.Role}</Text>
                </IntroContainer>
                <IntroContainer height="auto" width="auto">
                    <Title isTitleVisible={isTitleVisible} fontSize="2em">Timeline</Title>
                    <Text isTextVisible={isTextVisible} fontSize="1.3em">{props.Timeline}</Text>
                </IntroContainer>
                <IntroContainer height="auto" width="auto">
                    <Title isTitleVisible={isTitleVisible} fontSize="2em">Location</Title>
                    <Text isTextVisible={isTextVisible} fontSize="1.3em">{props.Location}</Text>
                </IntroContainer>
            </WorkDetailContainer>
        </WorkContainer>
    );
}
