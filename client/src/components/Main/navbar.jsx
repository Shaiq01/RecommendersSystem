import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
//import PersistentDrawerLeft from './drawer'
import '../scss/styles.scss'

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">

                <Navbar.Brand href="/home" id="brandname" >UNI <span style={{color:'black'}}>PERKS</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-lg-auto" id="itemsnav">
                        <Nav.Link id="item" href="/home">HOME</Nav.Link>
                        <Nav.Link id="item" href="#link">ABOUT US</Nav.Link>
                        <Nav.Link id="item" href="#link">CONTACT</Nav.Link>
                        <Nav.Link id="item" href="/stsignin">LOGIN</Nav.Link>
                    </Nav>                  
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

