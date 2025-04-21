import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar(){
    return(
        <nav className="navbar">
            <h2 className="logo">SkillSwap</h2>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><Link to="/upload">Upload</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;