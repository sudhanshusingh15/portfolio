// import React, { useState, useEffect } from 'react';
// import styled, { css, keyframes } from 'styled-components';

// const greetings = [
//   { message: "Hello World", color: "linear-gradient(45deg, #fa8231, #ffdd55)" },
//   { message: "¡Hola Mundo!", color: "linear-gradient(45deg, #fc466b, #3f5efb)" },
//   { message: "Hallo Welt!", color: "linear-gradient(45deg, #24c6dc, #514a9d)" },
//   { message: "Ciao Mondo!", color: "linear-gradient(45deg, #ff5f6d, #ffc371)" },
//   { message: "Bonjour le monde!", color: "linear-gradient(45deg, #7F00FF, #E100FF)" },
//   { message: "こんにちは世界", color: "linear-gradient(45deg, #9D50BB, #6E48AA)" },
//   { message: "Привет, мир", color: "linear-gradient(45deg, #c31432, #240b36)" },
//   { message: "Olá Mundo!", color: "linear-gradient(45deg, #00B4DB, #0083B0)" },
//   { message: "안녕 세상", color: "linear-gradient(45deg, #CAC531, #F3F9A7)" },
//   { message: "Hej Världen!", color: "linear-gradient(45deg, #11998e, #38ef7d)" },
// ];

// const fadeInUpAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20%);
//   }

//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const StyledBody = styled.div`
//   font-family: acorn, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   letter-spacing: 1px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white; /* Make default text color white */
//   margin: 0;
//   padding: 0;
//   position: relative;

//   ${props => props.firstTitle && css`
//         margin-top: 0.90em;
//         margin-bottom: -0.35em;
//     `}

//     ${props => css`
//         font-size: ${props.fontSize || "7.625em"};
//         font-weight: ${props.fontWeight || "600"};
//         color: ${props.color || "white"};
//     `}
// `;

// const ConsoleWrapper = styled.div`
//   text-align: center;
//   border: 1px solid white;
// `;

// const GradientGreeting = styled.span`
//   ${({ color }) => css`
//     background: ${color};
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     font-feature-settings: "liga";
//     text-rendering: optimizeLegibility;
//     -webkit-font-smoothing: antialiased;
//     display: inline-block;
    
//     animation: ${fadeInUpAnimation} 4s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
//   `}
// `;

// // animation: ${fadeInUpAnimation} 0.7s ease-out forwards;

// export function HelloWorld(props) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
//     }, 2500); // Change every 0.5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <StyledBody firstTitle>
//       <ConsoleWrapper>
//         <GradientGreeting key={index} color={greetings[index].color}>
//           {greetings[index].message}
//         </GradientGreeting>
//       </ConsoleWrapper>
//     </StyledBody>
//   );
// };


import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const greetings = [
  { message: "Hello World", color: "linear-gradient(45deg, #fa8231, #ffdd55)" },
  { message: "¡Hola Mundo!", color: "linear-gradient(45deg, #fc466b, #3f5efb)" },
  { message: "Hallo Welt!", color: "linear-gradient(45deg, #24c6dc, #514a9d)" },
  { message: "Ciao Mondo!", color: "linear-gradient(45deg, #ff5f6d, #ffc371)" },
  { message: "Bonjour le monde!", color: "linear-gradient(45deg, #7F00FF, #E100FF)" },
  { message: "こんにちは世界", color: "linear-gradient(45deg, #9D50BB, #6E48AA)" },
  { message: "Привет, мир", color: "linear-gradient(45deg, #c31432, #240b36)" },
  { message: "Olá Mundo!", color: "linear-gradient(45deg, #00B4DB, #0083B0)" },
  { message: "안녕 세상", color: "linear-gradient(45deg, #CAC531, #F3F9A7)" },
  { message: "Hej Världen!", color: "linear-gradient(45deg, #11998e, #38ef7d)" },
];

const generateSlideInAnimation = () => {
    let keyframesString = `from { opacity: 0; transform: translateY(0%); }`;
    for (let i = 1; i <= 100; i++) {
      keyframesString += `${i}% { opacity: ${i / 100}; transform: translateY(0); }`;
    }
    keyframesString += `to { opacity: 1; transform: translateY(0); }`;
    return keyframes`${keyframesString}`;
  };
  
const slideInAnimation = generateSlideInAnimation();

const fadeOut = keyframes`

    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const ConsoleWrapper = styled.div`
  text-align: center;
  border: 1px solid white;
`;

const GradientGreeting = styled.span`
  ${({ color }) => css`
    background: ${color};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    
    animation: ${slideInAnimation} 2.5s ease-out forwards, fadeOut 2.5s ease-out 2.5s forwards;
  `}
`;

// animation: ${fadeInUpAnimation} 2s ease-out forwards;

const StyledBody = styled.div`
  font-family: acorn, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Make default text color white */
  margin: 0;
  padding: 0;
  position: relative;

  ${props => props.firstTitle && css`
        margin-top: 0.90em;
        margin-bottom: -0.35em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "9.625em"};
        font-weight: ${props.fontWeight || "600"};
        color: ${props.color || "white"};
    `}
`;

export function HelloWorld(props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 7500); // Change every 0.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledBody firstTitle>
      <ConsoleWrapper>
        <GradientGreeting key={index} color={greetings[index].color}>
          {greetings[index].message}
        </GradientGreeting>
      </ConsoleWrapper>
    </StyledBody>
  );
};
