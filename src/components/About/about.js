import './about.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


function About() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="about-section">
            <div id="about-us">
                <Fade up>
                    <h1>About Us</h1>
                    <p>Associated Inventory Specialists started in 1976 in Jackson, Missouri, initially serving local small businesses. Today, we have expanded beyond our local reach and continue to serve other small to medium sized businesses all over the Southeast Missouri and Southern Illinois regions. We believe in providing high quality, reliable service to those who entrust our abilities.</p>
                    <p>Get started today by reaching out to us for a consultation!</p>
                    <button className="cta-btn">
                        <Link to="/contact" onClick={scrollToTop}>Contact Us</Link>
                    </button>
                </Fade>
            </div>
        </section>
    )
};

export default About;