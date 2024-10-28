import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'


function navbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Home</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/views/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/views/recordtypes">
                            <Nav.Link>Record Types</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default navbar;