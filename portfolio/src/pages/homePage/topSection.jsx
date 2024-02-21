import React from "react";
import styled, { css }from "styled-components";
import BackgroundAnimation from "../../containers/backgroundAnimation/index.jsx";


const TopSectionContainer = styled.div`
    width: 100%;
    height: 200vh;
    
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
    ${props => css`
        width: ${props.width || "100%"};
        height: ${props.height || 'auto'};
    `}
`;

const Title = styled.h1`
    font-family: acorn, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    letter-spacing: -4px;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    justify-content: space-evenly;
    word-break: break-word;
    text-align: center;
    margin-bottom: 0;

    ${props => props.firstTitle && css`
        margin-bottom: -1.2em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "120px"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
    `}
`;

const Text = styled.p`
    font-family: acorn, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    letter-spacing: -0.3px;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;    
    justify-content: space-evenly;
    word-break: break-word;
    text-align: center;
    margin-bottom: 0;

    ${props => css`
        font-size: ${props.fontSize || "30px"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
    `}
`;

export function TopSection(props) {
    return (
        <TopSectionContainer>
            <BackgroundAnimation />
            <TextContainer height="100vh">
                <Title firstTitle>Hello! I am</Title>
                <Title>Sudhanshu Singh</Title>
                <Text fontSize="30px" fontWeight="0">Software Engineer</Text>
            </TextContainer>
        </TopSectionContainer>
    );
}

