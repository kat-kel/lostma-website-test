import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../images/duck.jpg';
import NavDropdown from 'react-bootstrap/NavDropdown';


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
                <Nav className="justify-content-start" style={{ width: "100%" }}>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Corpus" id="basic-nav-dropdown">
                        <LinkContainer to="/corpus">
                            <NavDropdown.Item>
                                Presentation
                            </NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <LinkContainer to="/corpus/recordtypes">
                            <NavDropdown.Item>
                                Record Types
                            </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/corpus/workflow">
                            <NavDropdown.Item>
                                Workflow
                            </NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item href="https://heurist.huma-num.fr/heurist/?db=jbcamps_gestes" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                            Heurist Database
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://www.zotero.org/groups/5710605/lostma-international" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                            Zotero Library
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default navbar;