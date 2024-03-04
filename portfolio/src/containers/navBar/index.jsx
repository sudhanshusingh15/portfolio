import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 10; 
    transition: background-color 0.3s ease;
`;

const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0); 
    border-radius: 25px;
    padding: 0 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    margin-top: ${props => props.scrolled ? "40px" : "20px"};
    border: ${props => props.scrolled ? "1px solid rgba(255, 255, 255, 0.5)" : "none"};
    backdrop-filter: ${props => props.scrolled ? "blur(18px)" : "none"};

    &.scrolled {
        background-color: rgba(255, 255, 255, 0.5);
    }
`;
const AnchorLinkContainer = styled.div`
    padding: 15px 15px;
    position: relative; 
    display: flex; 
    align-items: center; 
`;

const AnchorLink = styled(Link)`
    text-decoration: none !important;
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 0.95em;
    color: rgb(255, 255, 255);
    cursor: pointer;
    outline: none;
    -webkit-font-smoothing: antialiased;
    display: inline;
    letter-spacing: 1.92px;
    line-height: 19.2px;
    text-transform: uppercase;
    transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    text-decoration-color: rgb(255, 255, 255);
    text-decoration-line: none;
    text-decoration-style: solid;
    text-decoration-thickness: auto;
    position: relative;
    

    &::after {
        content: "";
        position: absolute;
        bottom: -7.5px;
        left: 0;
        right: 0;
        height: 2px;
        background: #FFC600;
        transform: scaleX(0);
        transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        transform-origin: right;
    }

    &:hover {
        filter: contrast(0.9);
        color: #FFC600;

        &::after {
            transform: scaleX(1);
            transform-origin: left;
        }
    }
`;

const SepartionLine = styled.div`
    min-width: 2px;
    height: 10px; 
    background-color: #ffc600;
    align-self: center;
    margin: 0px 10px;
`;
// border-radius: 50%;

// const SlashBox = styled.div`
//     width: 25px;
//     height: 25px;
//     border-radius: 30%;
//     display: flex;
//     border: 2px solid #FFC600;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     right: -12px; 
//     top: 50%;
//     transform: translateY(-50%);
//     color: white;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
// `;

export function Navbar(props) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = document.documentElement.scrollTop > window.innerHeight * 0.1;
            setIsScrolled(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <NavbarContainer>
            <LinksWrapper scrolled={isScrolled} className={isScrolled ? "scrolled" : ""}>
                <AnchorLinkContainer>
                    <AnchorLink to="/user/access/signin">Work</AnchorLink>
                    {/* <SlashBox>/</SlashBox> */}
                </AnchorLinkContainer>
                <SepartionLine />
                <AnchorLinkContainer>
                    <AnchorLink to="/user/access/signup">About</AnchorLink>
                </AnchorLinkContainer>
                <SepartionLine />
                <AnchorLinkContainer>
                    <AnchorLink to="/upload">Play</AnchorLink>
                </AnchorLinkContainer>
                <SepartionLine />
                <AnchorLinkContainer>
                    <AnchorLink to="/about">Notes</AnchorLink>
                </AnchorLinkContainer>
                <SepartionLine />
                <AnchorLinkContainer>
                    <AnchorLink to="/contact">Contact</AnchorLink>
                </AnchorLinkContainer>
            </LinksWrapper>
        </NavbarContainer>
    );
}
