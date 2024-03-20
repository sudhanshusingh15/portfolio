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
    height: 600vh;
    background: #000;
`;

const HelloWorldContainer = styled.div`
    width: 85%;
    height: 23em; 
    display: flex;
    justify-content: center; 
    flex-direction: column;
    border: 1px solid magenta;
    padding: 0 0 50px 0;
    position: relative;
    overflow: hidden;
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

const IntroContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    padding: 3em;
    border: 5px solid green;

    ${props => css`
        padding-top: ${props.paddingTop || "3em"};
        height: ${props.height || "75vh;"};
        width: ${props.width || "85%"};
    `}

`;

const PhotoContainer = styled.div`
    position: relative;
    width: 25vw; 
    height: 62.5vh;
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

// font-family: gt, -apple-system, "system-ui", "segoe ui", roboto, oxygen, ubuntu, cantarell, "open sans", "helvetica neue", sans-serif;

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
            <HelloWorldContainer>
                <HelloWorld />
            </HelloWorldContainer>
            <IntroContainer paddingTop="5em">
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
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>Having a passion for problem-solving and product development, I'm actively</Text>
                    <Text fontSize="1.375em" fontWeight="400">seeking opportunities to leverage my skills in a collaborative environment.</Text>

                </TextContainer>
            </IntroContainer>
            <p>
                <br />
            </p>
            <Title fontSize="70px">Work Experience</Title>
            <p>
                <br />
            </p>
            <IntroContainer className="Dukaan" height="auto">
                <PhotoContainer>

                </PhotoContainer>
                <TextContainer width="60%">
                    <Title fontSize="3.5em" color="white">Full-Stack Engineer</Title>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Created a mobile application using React Native and Node.js that provides features such as</Text>
                    <Text fontSize="1.375em" fontWeight="400">push notifications, real-time tracking, and expedited checkouts.</Text>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Integrated Stripe API for payments, and DoorDash Drive API for delivery, and architected</Text>
                    <Text fontSize="1.375em" fontWeight="400">backend for feature augmentation, resulting streamlined operational efficiency by 40% and</Text>
                    <Text fontSize="1.375em" fontWeight="400">increased payment processing speed by 35%.</Text>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Utilized Google Cloud and Firebase for secure authentication and enhanced data</Text>
                    <Text fontSize="1.375em" fontWeight="400">management efficiency.</Text>
                </TextContainer>
            </IntroContainer>
            <p>
                <br />
            </p>
            <IntroContainer className="BTS" height="auto">
                <PhotoContainer>

                </PhotoContainer>
                <TextContainer width="60%">
                    <Title fontSize="3.5em" color="white">PM Analyst/QA Engineer</Title>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Designed and implemented 100+ automated test cases using Java, ensuring thorough and</Text>
                    <Text fontSize="1.375em" fontWeight="400">efficient testing.</Text>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Executed automated testing utilizing Katalon and implemented continuous integration and</Text>
                    <Text fontSize="1.375em" fontWeight="400">delivery process using Jenkins and Git.</Text>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Refactored and optimized 70+ existing regression test cases, enhancing test effectiveness</Text>
                    <Text fontSize="1.375em" fontWeight="400">and increasing code maintainability.</Text>
                </TextContainer>
            </IntroContainer>
            <p>
                <br />
            </p>
            <IntroContainer className="UPenn" height="auto">
                <PhotoContainer>

                </PhotoContainer>
                <TextContainer width="60%">
                    <Title fontSize="3.5em" color="white">Web Developer</Title>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Maintained custom web backend and data access system using Bash, PHP, and MySQL,</Text>
                    <Text fontSize="1.375em" fontWeight="400">while enhancing public-facing demos through the design and development of prototypes using</Text>
                    <Text fontSize="1.375em" fontWeight="400">Figma.</Text>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Redesigned 70% of the Cognitive Computation group website’s frontend and added new</Text>
                    <Text fontSize="1.375em" fontWeight="400">features using HTML, CSS, JavaScript, and AngularJS.</Text>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Reduced time for web page rendering by 60%, and improved page loading time by 15%.</Text>
                </TextContainer>
            </IntroContainer>
            <p>
                <br />
            </p>
            <IntroContainer className="GCI" height="auto">
                <PhotoContainer>

                </PhotoContainer>
                <TextContainer width="60%">
                    <Title fontSize="3.5em" color="white">Project Engineer</Title>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Created custom PLC programs for Allen-Bradley ControlLogix controllers for manufacturing</Text>
                    <Text fontSize="1.375em" fontWeight="400">and distribution industries using Studio 5000.</Text>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Designed and developed 100% custom client-based HMI screens using C-More.</Text>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Debugged process code and hardware issues within a timely manner, resulting in 65%</Text>
                    <Text fontSize="1.375em" fontWeight="400">decrease in malfunctions.</Text>
                </TextContainer>
            </IntroContainer>
            <p>
                <br />
            </p>
            <Title fontSize="70px">Skills</Title>
            <p>
                <br />
            </p>
            <IntroContainer className="Skills" height="auto">
                <TextContainer>
                    <Title fontSize="2.0em" color="white">PROGRAMMING</Title>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Python</Text>
                    <Text fontSize="1.375em" fontWeight="400">– Java</Text>
                    <Text fontSize="1.375em" fontWeight="400">– C++</Text>
                    <Text fontSize="1.375em" fontWeight="400">– C</Text>
                    <Text fontSize="1.375em" fontWeight="400">– PHP</Text>
                    <Text fontSize="1.375em" fontWeight="400">– Bash</Text>

                </TextContainer>
                <TextContainer>
                    <Title fontSize="2.0em" color="white">WEB DEVELOPMENT</Title>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– React</Text>
                    <Text fontSize="1.375em" fontWeight="400">– Node.js</Text>
                    <Text fontSize="1.375em" fontWeight="400">– Express</Text>
                    <Text fontSize="1.375em" fontWeight="400">– Django</Text>
                    <Text fontSize="1.375em" fontWeight="400">– Flask</Text>
                    <Text fontSize="1.375em" fontWeight="400">– jQuery</Text>

                </TextContainer>
                <TextContainer>
                    <Title fontSize="2.0em" color="white">TOOLS</Title>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Git</Text>
                    <Text fontSize="1.375em" fontWeight="400">– Jenkins</Text>
                    <Text fontSize="1.375em" fontWeight="400">– Docker</Text>
                    <Text fontSize="1.375em" fontWeight="400">– AWS</Text>
                    <Text fontSize="1.375em" fontWeight="400">– Firebase</Text>
                    <Text fontSize="1.375em" fontWeight="400">– MongoDB</Text>

                </TextContainer>
                <TextContainer>
                    <Title fontSize="2.0em" color="white">DESIGN</Title>
                    <p>
                        <br />
                    </p>
                    <Text fontSize="1.375em" fontWeight="400" firstText>– Photoshop</Text>
                    <Text fontSize="1.375em" fontWeight="400">– Illustrator</Text>
                    <Text fontSize="1.375em" fontWeight="400">– Figma</Text>
                    <Text fontSize="1.375em" fontWeight="400">– LATEX</Text>
                    <Text fontSize="1.375em" fontWeight="400">– Sketch</Text>
                    <Text fontSize="1.375em" fontWeight="400">– Adobe XD</Text>
                </TextContainer>
            </IntroContainer>

        </AboutContainer>);
}
