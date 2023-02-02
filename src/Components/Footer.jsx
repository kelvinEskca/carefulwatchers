import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-box links">
                <h3 className="heading">CONTACT US</h3>
                <ul className="list">
                    <li><img src="../images/icons8-composing-mail-30.png" alt="icons8-composing-mail-30" /><Link to={`mailto:info@carefulwatchers.co.uk`}>info@carefulwatchers.co.uk</Link></li>
                    <li><img src="../images/icons8-ringer-volume-30.png" alt="icons8-ringer-volume-30" /><Link to={`tel:+44-7442-104683`}>+44-7442-104683</Link></li>
                    <li><img src="../images/icons8-link-30.png" alt="icons8-link-30" /><Link to="https://carefulwatchers.co.uk">https://carefulwatchers.co.uk</Link></li>
                </ul>
            </div>

            <div className="footer-box social">
                <h3 className="heading">FOLLOW US</h3>
                <ul className="list">
                    <li><Link to="facebook.com"><img src="../images/icons8-facebook-30.png" alt="icons8-facebook-30" /></Link></li>
                    <li><Link to="twitter.com"><img src="../images/icons8-twitter-30.png" alt="icons8-twitter-30" /></Link></li>
                    <li><Link to="instagram.com"><img src="../images/icons8-instagram-30.png" alt="icons8-instagram-30" /></Link></li>
                    <li><Link to="linkedin.com"><img src="../images/icons8-linkedin-30.png" alt="icons8-linkedin-30" /></Link></li>
                </ul>
            </div>
        </footer>
    );
}
 
export default Footer;