import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to="/"><img src="../images/logo.png" alt="logo" className="logo"/></Link>
            <Link to="/register">Join Waitlist</Link>
        </header>
    );
}
 
export default Header;