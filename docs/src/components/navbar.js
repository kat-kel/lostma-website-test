import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../images/erc-logo.png'

function navbar() {
    return (
        <Navbar
            className="justify-content-start"
            variant="dark"
            sticky="top"
        >
            <LinkContainer to="https://cordis.europa.eu/project/id/101117408">
                <Navbar.Brand><img
                    alt="ERC"
                    src={logo}
                    className="navbar-logo"
                /></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-start" style={{ width: "100%" }}>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/corpus">
                        <Nav.Link>Corpus</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default navbar;