import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/portfolio">Resume</Link>
                </li>
                <li>
                    <Link to="/Temp">Portfolio</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;