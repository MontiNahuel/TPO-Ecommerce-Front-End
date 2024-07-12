import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavbarStyle.scss'; // Importa la hoja de estilos

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    MyApp
                </Link>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="navbar-link">About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact" className="navbar-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
