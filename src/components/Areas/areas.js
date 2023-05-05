import './areas.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';
import pins from '../../assets/images/geojango-maps-Z8UgB80_46w-unsplash.jpg';

function Areas() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <section id="areas-page">
            <div id="areas-top">
                <Fade left>
                    <div id="areas-top-text">
                        <h1>Areas We Cover</h1>
                        <p>We proudly cover several Southern Illinois and Southeast Missouri counties. A few notable counties include:</p>
                        <li>Cape Girardeau County (MO)</li>
                        <li>Jackson County (IL)</li>
                        <li>St. Francois County (MO)</li>
                        <li>Union County (IL)</li>
                        <li>Scott County (MO)</li>
                        <p>If you have any questions regarding our travel range, services, or anything else, please <Link to="/contact" onClick={scrollToTop} className="contact-us-text">contact us!</Link></p>
                    </div>
                </Fade>
                <Fade right>
                    <img src={pins} alt="hand with pins and map" loading="lazy"/>
                </Fade>
            </div>
        </section>
    )
};

export default Areas;