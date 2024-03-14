import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes, css }from "styled-components";
import { Navbar } from "../../containers/navBar/index.jsx";
import { HelloWorld } from "../../containers/helloWorld/index.jsx";


const AboutContainer = styled.div`
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
    width: 85%;
    height: auto; 
    display: flex;
    justify-content: center; 
    flex-direction: column;
    border: 1px solid yellow;
    padding: 0 0 50px 0;
    position: relative;
    z-index: 2;

    ${props => css`
        width: ${props.width || "85%"};
    `}    
`;

const IntroContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 85%;
    height: 75vh;
    padding: 3em;
    border: 5px solid green;

`;

const PhotoContainer = styled.div`
    position: relative;
    width: 25vw; 
    height: 52.5vh;
    border: 2px solid red;
    border-radius: 5em;
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
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: -0.3px;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;    
    text-align: left;
    margin: 0;
    padding-top: .3em;
   
    ${props => props.firstText && css`
        margin-top: -1em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "1.875em"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
    `}
`;

export function About(props) {
    const [temperatureC, setTemperatureC] = useState(null);
    const [temperatureF, setTemperatureF] = useState(null);

    // useEffect(() => {
    //     const fetchTemperature = async () => {
    //         const apiKey = "OaDeJw2BfwTmqX7B7oSRcazI8b6cp4R0";
    //         const url = `https://api.tomorrow.io/v4/weather/realtime?location=39.9526,-75.1652&fields=temperature&apikey=${apiKey}`;

    //         try {
    //             const response = await fetch(url);
    //             const data = await response.json();
    //             const tempC = data?.data?.values?.temperature;
    //             if (tempC !== undefined) {
    //                 const tempF = tempC * (9/5) + 32;
    //                 setTemperatureC(tempC.toFixed(0));
    //                 setTemperatureF(tempF.toFixed(0));
    //             }
    //         } catch (error) {
    //             console.error("Failed to fetch temperature", error);
                
    //         }
    //     };

    //     fetchTemperature();
    // }, []); 



    return (
        <AboutContainer>
            <Navbar />
            <TextContainer>
                <HelloWorld />
            </TextContainer>
            <IntroContainer>
                <PhotoContainer>
                    
                </PhotoContainer>
                <TextContainer width="52%">
                    <Title fontSize="3.5em" color="white">I'm a <span>Software Engineer</span></Title>
                    {/* <Title fontSize="3.5em" color="white">working remotely from <span>{temperatureC ? `${temperatureC}° C / ${temperatureF}° F` : "loading..."}</span> Philadelphia, USA.</Title> */}
                    <Title fontSize="3.5em" color="white">working remotely from <span>7° C</span> Philadelphia, USA.</Title>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>Throughout my professional journey, I've honed my skills in creating</Text>
                    <Text fontSize="1.375em" fontWeight="400">efficient automated test cases, boosting system performance, and enhancing user</Text>
                    <Text fontSize="1.375em" fontWeight="400">interface designs, leading to significant improvements such as increased test</Text>
                    <Text fontSize="1.375em" fontWeight="400">effectiveness, quicker web page rendering, and reduced system malfunctions.</Text>

                </TextContainer>
            </IntroContainer>
        </AboutContainer>);
}


// Throughout my professional journey, I've honed my skills in creating efficient automated test cases, boosting system performance, and enhancing user interface designs, leading to significant improvements such as increased test effectiveness, quicker web page rendering, and reduced system malfunctions.