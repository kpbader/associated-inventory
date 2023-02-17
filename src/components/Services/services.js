import './services.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import {
    BsFillCalendarCheckFill,
    BsClipboardCheck,
    BsFillCalculatorFill
}
    from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';

function Services() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
        <section id="services-page">
            <div id="our-services-top">
                <Fade up>
                    <h1>Our Services</h1>
                    <p>We provide retail or wholesale audits customized to each customer's specific needs. Pricing is based on inventory or hourly basis plus travel. Although we have specialized in convenience and grocery stores, we are also experienced in pharmaceutical and warehouse inventories. Discounts are available after first audit and based on frequency.</p>
                </Fade>
            </div>
            <div id="our-services">
                <Fade up>
                    <h2>How We Work</h2>
                </Fade>
                <Fade up>
                    <div id="hww-cards">
                        <Card>
                            <RiTeamFill className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Our trained crews will inventory your business quietly and efficiently without disturbing your customers or staff.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <BsClipboardCheck className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Providing free estimates to prospective clients
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <BsFillCalculatorFill className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Our employees work with DC-5 auditing machines, which enhances the teams' overall performance
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <BsFillCalendarCheckFill className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Schedule your inventory at a time that is convenient for you.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Fade>
                <Fade up>
                    <button className="cta-btn">
                        <Link to="/contact" onClick={scrollToTop}>Get started</Link>
                    </button>
                </Fade>
            </div>
        </section>
    )
};

export default Services;