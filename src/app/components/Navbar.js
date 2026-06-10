
import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">IT-SOLUTIONS</h1>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link href="/work" onClick={() => setMenuOpen(false)}>Work</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        <div className={`hamburger ${menuOpen ? "toggle" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
