import './footer.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import footerLogo from '../../assets/images/logo-white-1-01.png';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="footer">
            <img src={footerLogo} alt="logo" />
            <Nav className="footer-links">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/associated-inventory" onClick={scrollToTop} className="footer-nav-tab">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/services" onClick={scrollToTop} className="footer-nav-tab">Services</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/areas" onClick={scrollToTop} className="footer-nav-tab">Areas We Cover</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/about" onClick={scrollToTop} className="footer-nav-tab">About</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/contact" onClick={scrollToTop} className="footer-nav-tab">Contact</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </section>
    )
};

export default Footer;