import React from "react";
import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import '../App.css';

 export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll);

        return() => window.removeEventListener('scroll', onScroll)
    },[])

    const onUpdateActiveLink =(value) => {
            setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    {/* <img src={logo} alt="logo"></img> */}
                    <span className="text-light">LOGO</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link': 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link': 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link': 'navbar-link'}
                        onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                <span className="Navbar-text">
                    <div className="social-icon">
                        <a href="#home">In</a>
                        <a href="#skills">f</a>
                        <a href="#projects">ins</a>
                        <button  onClick={() => console.log('connect')} className="butonNav"><span>Let's connect</span></button>
                    </div>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
}
