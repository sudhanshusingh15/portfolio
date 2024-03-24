import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes, css }from "styled-components";
import { Navbar } from "../../../containers/navBar/index.jsx";
import { WorkExpContainer } from "../../../containers/workContainer/index.jsx";



const ChaiMohContainer = styled.div`
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
    text-align: left;
    margin: 0;
    padding-top: .4em;
   
    ${props => props.firstText && css`
        margin-top: -1em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "1.875em"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
    `}
`;


export function ChaiMoh(props) {
    return (
        <ChaiMohContainer>
            <Navbar />
            <WorkExpContainer Title="ChaiMoh" Role="Full-Stack Developer" Timeline="October 2023 - Present" Location="Philadelphia, PA, USA" />
            <TextContainer width="52%">
                <Title fontSize="3.5em">Overview</Title>
                <Text fontSize="1.375em" fontWeight="400">ChaiMoh is a comprehensive sales and inventory management application designed to streamline</Text>
                <Text fontSize="1.375em" fontWeight="400">the operations of businesses. Developed with React Native, the platform offers real-time sales charts,</Text>
                <Text fontSize="1.375em" fontWeight="400">inventory updates, and the ability to generate monthly statements in PDF format. This significantly</Text>
                <Text fontSize="1.375em" fontWeight="400">enhances operational efficiency and decision-making processes for its users, ensuring that businesses</Text>
                <Text fontSize="1.375em" fontWeight="400">have the tools they need to succeed in a competitive market environment.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="52%">
                <Title fontSize="3.5em">Technology & Security</Title>
                <Text fontSize="1.375em" fontWeight="400">At the heart of ChaiMoh's operations lies Firebase, utilized for its scalable, real-time database</Text>
                <Text fontSize="1.375em" fontWeight="400">capabilities, enabling efficient management of items, sales records, and user profiles. Security is</Text>
                <Text fontSize="1.375em" fontWeight="400">fortified through Firebase Authentication, providing robust user authentication and role-based access</Text>
                <Text fontSize="1.375em" fontWeight="400">control. The integration of the PayTM API for digital payments and Firebase Analytics for sales trend</Text>
                <Text fontSize="1.375em" fontWeight="400">analysis further empowers businesses with the tools needed for success in a digital economy. This</Text>
                <Text fontSize="1.375em" fontWeight="400"> combination of advanced technologies ensures that ChaiMoh is not just a tool, but a comprehensive</Text>
                <Text fontSize="1.375em" fontWeight="400"> solution for business management and growth.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="52%">
                <Title fontSize="3.5em">Impact & Utility</Title>
                <Text fontSize="1.375em" fontWeight="400">ChaiMoh not only enhances operational efficiency but also provides invaluable insights into sales trends</Text>
                <Text fontSize="1.375em" fontWeight="400">and inventory levels, allowing businesses to make informed decisions. The application's user-friendly</Text>
                <Text fontSize="1.375em" fontWeight="400">interface and the integration of advanced technological solutions such as Firebase Storage for file</Text>
                <Text fontSize="1.375em" fontWeight="400">management underscore its commitment to addressing the dynamic needs of modern businesses. By</Text>
                <Text fontSize="1.375em" fontWeight="400">offering a platform that is both powerful and easy to use, ChaiMoh plays a crucial role in helping</Text>
                <Text fontSize="1.375em" fontWeight="400">businesses navigate the challenges of inventory and sales management in today's fast-paced world.</Text>
            </TextContainer>
        </ChaiMohContainer>
    );
}