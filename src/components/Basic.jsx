import { Link } from "react-router-dom";
import '../style.scss';

function Navbar() {
    return(
        <nav className="nav">
            <h3>HamMovie</h3>
            <Link to="/" className="main">Main</Link>
        </nav>
    )
}

function Footer() {
    return (
        <footer className="footer">
            © 2025 HamMovie. All rights reserved.
        </footer>
    );
}

export {Navbar, Footer};