import React, {useState} from "react";
import "./Navbar.css";

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
       <nav className="navbar">
      <h2 className="logo">Hotel Raven</h2>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>Home</li>
        <li>Rooms</li>
        <li>Booking</li>
        <li>Contact</li>
      </ul>
      </nav>

    )
}