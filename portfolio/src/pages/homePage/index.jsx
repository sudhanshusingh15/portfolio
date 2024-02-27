import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes, css }from "styled-components";
import { TopSection } from "./topSection";
import { Navbar } from "../../containers/navBar/index.jsx";

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    height: 300vh;
    background: #000;
`;

export function HomePage(props) {
    return (
        <HomePageContainer>
            <Navbar />
            <TopSection />
        </HomePageContainer>
    );
}