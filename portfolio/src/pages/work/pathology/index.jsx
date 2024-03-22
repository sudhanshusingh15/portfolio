import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes, css }from "styled-components";
import { Navbar } from "../../../containers/navBar/index.jsx";
import { WorkExpContainer } from "../../../containers/workContainer/index.jsx";



const PathologyContainer = styled.div`
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


export function Pathology(props) {
    return (
        <PathologyContainer>
            <Navbar />
            <WorkExpContainer Title="Digital Pathology" Role="MLOps / Front-End" Timeline="October 2022 - June 2023" Location="Philadelphia, PA, USA" />
            <TextContainer width="52%">
                <Title fontSize="3.5em">Overview</Title>
                <Text fontSize="1.375em" fontWeight="400">Digital Pathology was a senior design project that me along with 4 other friends worked on. It is a web</Text>
                <Text fontSize="1.375em" fontWeight="400">application that let's user upload Whole Slide Images (WSI)- somewhere in the range of 10-25GB - to</Text>
                <Text fontSize="1.375em" fontWeight="400">detect Sinusitis cells in the given WSI by using our ML model. This platform was created to empower</Text>
                <Text fontSize="1.375em" fontWeight="400"> pathologists, researchers to improve diagnostic precision and enhance patient care.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="75vw" height="95vh">
                
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="52%">
                <Title fontSize="3.5em">ML</Title>
                <Text fontSize="1.375em" fontWeight="400">The backend infrastructure leverages state-of-the-art machine learning algorithms, including</Text>
                <Text fontSize="1.375em" fontWeight="400">convolutional neural networks (CNNs), to accurately analyze and classify sinusitis based on the</Text>
                <Text fontSize="1.375em" fontWeight="400">provided whole slide images. To streamline the development and training of machine learning models,</Text>
                <Text fontSize="1.375em" fontWeight="400">techniques, such as Felzenszwalb, Quickshift, and SLIC segmentation algorithms, are integrated into</Text>
                <Text fontSize="1.375em" fontWeight="400">the system. These techniques identify regions of interest (ROIs) within the whole slide images,</Text>
                <Text fontSize="1.375em" fontWeight="400">improving the precision and performance of the classification models.</Text>
                <p>

                </p>
                <Text fontSize="1.375em" fontWeight="400">Data acquisition and processing are seamlessly handled by the platform's Unified Image Reader (UIR).</Text>
                <Text fontSize="1.375em" fontWeight="400">The UIR provides a unified interface for reading large-scale images by regions, facilitating efficient</Text>
                <Text fontSize="1.375em" fontWeight="400">processing of massive image datasets that exceed memory limitations. The Custom Dataset (CD), an</Text>
                <Text fontSize="1.375em" fontWeight="400">extension of PyTorch's Dataset, lies at the core of the system. CD incorporates advanced filtration</Text>
                <Text fontSize="1.375em" fontWeight="400">algorithms and implements the Dark Region Mapping technique to handle dynamically sized datasets</Text>
                <Text fontSize="1.375em" fontWeight="400">ensuring that only relevant regions pass through the filtration process, enhancing the efficiency and</Text>
                <Text fontSize="1.375em" fontWeight="400">accuracy of subsequent analysis stages.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="75vw" height="95vh">
                
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="52%">
                <Title fontSize="3.5em">Front-End</Title>
                <Text fontSize="1.375em" fontWeight="400">After the backend, now it was time for a web application for user to sign in for secure user-auth and</Text>
                <Text fontSize="1.375em" fontWeight="400">then upload WSI for analysis. The application is built on React, a robust framework for dynamic user</Text>
                <Text fontSize="1.375em" fontWeight="400">interfaces, efficient rendering and state management. React offers flexibilty for future enhancements</Text>
                <Text fontSize="1.375em" fontWeight="400">which allowed us to integrate filtration methods and optimize performance through local pre-</Text>
                <Text fontSize="1.375em" fontWeight="400">processing of images.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="75vw" height="95vh">
                
                </PhotoContainer>
            </IntroContainer>
        </PathologyContainer>
    );
}