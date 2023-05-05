import './contact.css';
import { BsTelephone } from 'react-icons/bs';
import { SlLocationPin } from "react-icons/sl";
import { FiMail } from "react-icons/fi";
import Fade from 'react-reveal/Fade';

function Contact() {

    return (
        <section id="contact-page">
            <Fade right>
                <div id="map-info">
                    <div className="contact-info-line">
                        <BsTelephone />
                        <p>(573) 204-4848</p>
                    </div>
                    <div className="contact-info-line">
                        <FiMail />
                        <a href="mailto: ginaraffety@yahoo.com">Reach out</a>
                    </div>
                    <div className="contact-info-line">
                        <SlLocationPin />
                        <p>210 W Main St., Jackson, Missouri 63755</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.2926824152946!2d-89.67155848464762!3d37.38291007983268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88778c827acef3e5%3A0x40973c296aaa37e7!2s210%20W%20Main%20St%2C%20Jackson%2C%20MO%2063755!5e0!3m2!1sen!2sus!4v1676573632891!5m2!1sen!2sus" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Fade>
        </section>
    )
};

export default Contact;