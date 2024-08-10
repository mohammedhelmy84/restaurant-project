import React from "react";
// import {Container, Navbar} from 'react-bootstrap';
import './Navs.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './../../assets/logo.png';



const Navs = () =>{
   return(
    
    <Navbar expand="lg" className="navbar fixed-top bg-light">
      <Container>
        <Navbar.Brand href="#Home">
          <img src={logo} title="logo" className="logo" alt="{image}"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav" style={{marginLeft:"auto"}}>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#aboutus_link">about us</Nav.Link>
            <Nav.Link href="#food_link">explore food</Nav.Link>
            <Nav.Link href="#review_link">review</Nav.Link>
            <Nav.Link href="#" id="lastnav">01016440812</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
   );
}

export default Navs;