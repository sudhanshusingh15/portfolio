import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes, css }from "styled-components";
import { Navbar } from "../../../containers/navBar/index.jsx";
import { WorkExpContainer } from "../../../containers/workContainer/index.jsx";



const DukaanContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    height: 600vh;
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
    border-radius: 5em;
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


export function Dukaan(props) {
    return (
        <DukaanContainer>
            <Navbar />
            <WorkExpContainer Title="Dukaan" Role="Full-Stack Developer" Timeline="March 2022 - Present" Location="Philadelphia, PA, USA" />
            <TextContainer width="52%">
                <Title fontSize="3.5em">Overview</Title>
                <Text fontSize="1.375em" fontWeight="400">2 international university students came across an idea to have go-to delivery service for ordering</Text>
                <Text fontSize="1.375em" fontWeight="400">Indian snacks, meals and groceries for students across Philadelphia.</Text>
                <p>
                    
                </p>
                <Text fontSize="1.375em" fontWeight="400">Started as a hurried WhatsApp business back in 2022, we came up with a delivery app - since.</Text>
                <Text fontSize="1.375em" fontWeight="400">the relaunch, and our customers are coming back for the assurance of seamless deliveries and a wide</Text>
                <Text fontSize="1.375em" fontWeight="400">catalog of Indian products available at Dukaan.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="85vw" height="85vh">
                
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="52%">
                <Title fontSize="3.5em">Tech Stack</Title>
                <Text fontSize="1.375em" fontWeight="400">With Shopify webstore in place, we went ahead and decided that it's finally time to build our own app</Text>
                <Text fontSize="1.375em" fontWeight="400">and increase the customer retention rate. I, along with our team, created some high fidelity and came</Text>
                <Text fontSize="1.375em" fontWeight="400"> up with some solid designs for the app along with promotional ones all using Figma.</Text>
                <p>

                </p>
                <Text fontSize="1.375em" fontWeight="400">For the app, we used React Native for both iOS and Android platforms. Integrated Stripe API</Text>
                <Text fontSize="1.375em" fontWeight="400">for payment systems and DoorDash Drive API for delivery, and real-time tracking. Not only this allowed</Text>
                <Text fontSize="1.375em" fontWeight="400">streamline our operational efficiency by 40% but also increased our payment processing speed by</Text>
                <Text fontSize="1.375em" fontWeight="400">35%. We also used Firebase and Google Cloud for secure user-auth and data management.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="52%">
                <Title fontSize="3.5em">Achievements</Title>
                <Text fontSize="1.375em" fontWeight="400">We launched the app in December 31st, 2023 and since then, there has been an +80% MoM increment</Text>
                <Text fontSize="1.375em" fontWeight="400">in new users. Apart from that, we have received $10,000 by coming 2nd in Drexel Startup Fest. Our</Text>
                <Text fontSize="1.375em" fontWeight="400">mission to deliver Indian snacks right at doorsteps in going strong across Phialdelphia reigon and are</Text>
                <Text fontSize="1.375em" fontWeight="400">strongly expected to expand in other cities in the upcoming years.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
            </IntroContainer>
            <IntroContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
            </IntroContainer>
        </DukaanContainer>
    );
}