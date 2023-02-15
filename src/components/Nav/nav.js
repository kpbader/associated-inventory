import './nav.css';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo-white-1-01.png'; 
import React, { useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation() {

    // offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nav = useNavigate();

    return (
        <section id="nav-bar">
            <img src={logo} alt="logo" />
            <Nav id="main-nav-links">
                <Nav.Link>
                    <Link to="/associated-inventory">Home</Link> 
                </Nav.Link>
                <NavDropdown id="services-dropdown" title="Our Services ⌄">
                    <NavDropdown.Item onClick={()=> nav("/services")}>
                        Services We Provide
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={()=> nav("/areas")}>
                        Areas We Cover
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                    <Link to="/about">About Us</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/contact">Contact</Link>
                </Nav.Link>
            </Nav>
        </section>
    )
};

export default Navigation;