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
            <img src={logo} alt="logo" loading="lazy"/>
            <Nav id="main-nav-links">
                <Nav.Link>
                    <Link to="/">Home</Link> 
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

            <Button id="hamburger-btn" className="openbtn" onClick={handleShow}>
                ☰
            </Button>
            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                    <section id="nav-tabs">
                        <ul className="tabpanel">
                            <Link to="/" className="header-nav-tab" onClick={handleClose}>Home</Link>
                            <Link to="/services" cl onClick={handleClose} className="header-nav-tab">Services</Link>
                            <Link to="/areas" className="header-nav-tab" onClick={handleClose}>Areas We Cover</Link>
                            <Link to="/about" className="header-nav-tab" onClick={handleClose}>About</Link>
                            <Link to="/contact" className="header-nav-tab" onClick={handleClose}>Contact</Link>
                        </ul>
                    </section>
                </Offcanvas.Body>
            </Offcanvas >

        </section>
    )
};

export default Navigation;