import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function navbar() {
    return (
        <Navbar
            className="justify-content-start"
            variant="dark"
            sticky="top"
        >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-start" style={{ width: '100%' }}>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/people">
                        <Nav.Link>People</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/corpus">
                        <Nav.Link>Corpus</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/news">
                        <Nav.Link>News</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default navbar;