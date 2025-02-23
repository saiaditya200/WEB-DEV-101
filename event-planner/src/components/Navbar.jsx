import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Event Planner</h2>
      <ul>
        <li><Link to="/events">View Events</Link></li>
        <li><Link to="/add-event">Add Event</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
