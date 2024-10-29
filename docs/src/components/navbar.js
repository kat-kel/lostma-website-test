import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../images/duck.jpg';



function navbar() {
    return (
        <Navbar 
            className="justify-content-start" 
            bg="success" 
            variant="dark"
            sticky="top"
        >
                <LinkContainer to="/">
                    <Navbar.Brand><img
                        alt="Home"
                        src={logo}
                        height='30px'
                        className="d-inline-block align-top rounded"
                        style={{ paddingLeft: '10px' }}
                    /></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-start" style={{ width: "100%"}}>
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/views/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/views/recordtypes">
                            <Nav.Link>Record Types</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
}

export default navbar;