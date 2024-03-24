import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes, css }from "styled-components";
import { Navbar } from "../../../containers/navBar/index.jsx";
import { WorkExpContainer } from "../../../containers/workContainer/index.jsx";



const LiveFeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    height: 700vh;
    background: #000;
`;

const IntroContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    padding: 3em 0;
    border: 5px solid green;

    ${props => css`
        height: ${props.height || "auto"};
        width: ${props.width || "auto"};
    `}

`;

const TextContainer = styled.div`
    display: flex;
    justify-content: center; 
    flex-direction: column;
    border: 1px solid yellow;
    padding: 0 0 50px 0;
    position: relative;

    ${props => css`
        width: ${props.width || "85%"};
        height: ${props.height || "auto"};
    `}    
`;

const PhotoContainer = styled.div`
    position: relative;
    border: 2px solid red;
    border-radius: 3em;
    margin: 3em;

    ${props => css`
        width: ${props.width || "25vw"};
        height: ${props.height || "62.5vh"};
    `}
`;

const Title = styled.h1`
    font-family: acorn, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-feature-settings: "liga";
    font-weight: 700;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    text-align: left;
    border: 1px solid red;
   
    ${props => css`
        font-size: ${props.fontSize || "10.625em"};
        color: ${props.color || "white"};
    `}
`;

const Text = styled.p`
    font-family: 'Amoera', "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: -0.3px;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding-top: .4em;
   
    ${props => props.firstText && css`
        margin-top: -1em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "1.875em"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
        text-align: ${props.textAlign || "left"};
    `}
`;


export function LiveFeed(props) {
    return (
        <LiveFeedContainer>
            <Navbar />
            <WorkExpContainer Title="Live Feed" Role="Automation Engineer" Timeline="October 2019 - March 2020" Location="Bethlehem, PA, USA" />
            <TextContainer width="52%">
                <Title fontSize="3.5em">Overview</Title>
                <Text fontSize="1.375em" fontWeight="400">The Reflux Dialysis Live Feed project was designed to extract critical parametric values from the</Text>
                <Text fontSize="1.375em" fontWeight="400">Soxhlet Dialysis system. This effort utilized advanced programming tools such as Studio 5000 and</Text>
                <Text fontSize="1.375em" fontWeight="400">KepServerEX v6.</Text>
                <p>

                </p>
                <Text fontSize="1.375em" fontWeight="400">In overview, the PLC (Programmable Logic Controller), in this case - Allen Bradley ControlLogix,</Text>
                <Text fontSize="1.375em" fontWeight="400">implemented in the system would keep track of live parameters in it's memory and the Live Feed would</Text>
                <Text fontSize="1.375em" fontWeight="400">extract those parameters from the PLC to display critical live information such as Vapor Temperature,</Text>
                <Text fontSize="1.375em" fontWeight="400">Liquid Temperature, Flow Rate, etc. in real-time to facilitate more informed critical decision-making.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="35vw" height="95vh">
                
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="52%">
                <Title fontSize="3.5em">Technology & Security</Title>
                <Text fontSize="1.375em" fontWeight="400">The project's main task to provide a real-time monitoring feed was accomplished through the use of</Text>
                <Text fontSize="1.375em" fontWeight="400">Node-RED and JavaScript. Node-RED provided the abstraction of these parameters from the PLC and</Text>
                <Text fontSize="1.375em" fontWeight="400">scripts written in JavaScript helped introduce multiple numeric and graphical indicators for the Live</Text>
                <Text fontSize="1.375em" fontWeight="400">Feed, providing detailed, real-time data visualization. This approach not only enhanced the usability of</Text>
                <Text fontSize="1.375em" fontWeight="400">the monitoring system but also significantly increased the depth of information available to</Text>
                <Text fontSize="1.375em" fontWeight="400">professionals.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="75vw" height="95vh">
                
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="52%">
                <Text fontSize="1.2em" fontWeight="400" textAlign="center" >NOTE: Above image is just an example implementation as I am not allowed to post anything related to this project :(</Text>
            </TextContainer>
        </LiveFeedContainer>
    );
}