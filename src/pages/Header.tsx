import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link to="/" >Homes</Link> {" "}
            <Link to="/experiences" >Experiences</Link> {" "}
            <Link to="/services" >Services</Link> {" "}
        </nav>
    )
}

export default Header;