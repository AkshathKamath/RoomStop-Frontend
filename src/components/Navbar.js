import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faBed, faList } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import custom styles for the navbar

const Navbar = () => (
    <div className="sidebar">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/roommates"><FontAwesomeIcon icon={faUserFriends} /> Roommates</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/rooms"><FontAwesomeIcon icon={faBed} /> Rooms</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/shortlist"><FontAwesomeIcon icon={faList} /> My Shortlist</Link>
            </li>
        </ul>
    </div>
);

export default Navbar;
