import './home.css';
import heroBanner from '../../assets/images/frank-chamaki-overlay.jpg';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import {
    BsFillCalendarCheckFill,
    BsClipboardCheck,
}
    from 'react-icons/bs';
import { FaStoreAlt, FaMoneyCheckAlt } from 'react-icons/fa';
import landscape from '../../assets/images/raquel-pedrotti-hB-Vwbyxr9U-unsplash.jpg';

function Home() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
        <section id="home-page">
            <div id="splash">
                <img src={heroBanner} alt="Photo by Franki Chamaki" loading="lazy"/>
                <Fade up>
                    <div id="splash-text">
                        <h1>Serving Southeast Missouri and Southern Illinois since 1976</h1>
                        <button className="cta-btn">
                            <Link to="/about" onClick={scrollToTop}>Learn More</Link>
                        </button>
                    </div>
                </Fade>
            </div>
            <div id="our-services">
                <Fade up>
                    <h2>What We Can Provide</h2>
                </Fade>
                <Fade up>
                    <div id="service-cards">
                        <Card>
                            <FaStoreAlt className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Covering small to medium sized businesses, estates and pharmaceutical
                                    audits.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <BsClipboardCheck className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Free estimates
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <FaMoneyCheckAlt className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Quality service at an affordable cost
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
                        <Link to="/services" onClick={scrollToTop}>Learn More</Link>
                    </button>
                </Fade>
            </div>
            <div id="areas-we-cover">
                <Fade left>
                    <div id="awc-text">
                        <h2>Areas We Cover</h2>
                        <p>For over 43 years, have served many different businesses throughout Southeast Missouri and Southern Illinois.</p>
                        <p>Some notable counties include:</p>
                        <li>Cape Girardeau County (MO)</li>
                        <li>Jackson County (IL)</li>
                        <li>St. Francois County (MO)</li>
                        <li>Union County (IL)</li>
                        <li>Scott County (MO)</li>
                        <p>If you have any questions regarding our travel range, services, or anything else, please <Link to="/contact" onClick={scrollToTop} className="contact-us-text">contact us!</Link></p>
                    </div>
                </Fade>
                <Fade right>
                    <img src={landscape} alt="Landscape" loading="lazy"/>
                </Fade>
            </div>
        </section>
    )
};

export default Home;