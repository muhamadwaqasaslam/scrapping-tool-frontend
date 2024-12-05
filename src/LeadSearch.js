import React, { useState } from "react";
import "./LeadSearch.css"; // Updated CSS file name
import "font-awesome/css/font-awesome.min.css";
import logo from './logo.png';  // Import the logo image
import { Link } from "react-router-dom";

function LeadSearch() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsNavOpen(false);
  };

  return (
    <div className="email-verifier-container">
      <header className="header">
        <nav className="navbar">
          <img src={logo} alt="Logo" className={`logo ${isSidebarOpen ? "hide" : ""}`} />
          <button className="nav-toggle" onClick={toggleSidebar}>
            &#9776;
          </button>
          <div className={`nav-links ${isNavOpen ? "active" : ""}`}>
            <a href="/" className="nav-link">Email Finder</a>
            <a href="/email-verifier" className="nav-link">Email Verifier</a>
            <a href="/lead-search" className="nav-link">Lead Search</a>
            <a href="/company-search" className="nav-link">Company Search</a>
          </div>
        </nav>
      </header>

      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <a href="/" className="nav-link" onClick={toggleSidebar}>Email <span>Finder</span></a>
        <a href="/email-verifier" className="nav-link" onClick={toggleSidebar}>Email Verifier</a>
        <a href="/lead-search" className="nav-link" onClick={toggleSidebar}>Lead Search</a>
        <a href="/company-search" className="nav-link" onClick={toggleSidebar}>Company Search</a>
      </div>

      <main className="search-lead">
        <h2>Lead <span>Search</span></h2>
        <h3>Find leads and email addresses all in one place</h3>
        <p>Discover professionals and their emails from your target market using a database of 20M+ companies and 150M+ professional profile. Refreshed daily. At your access.</p>

        <button className="discover-lead">
  <Link to="/lead-finder" className="button-link">
    Discover Lead
  </Link>
</button>




      </main>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#">LinkedIn Email Finder</a></li>
              <li><a href="#">Email Finder</a></li>
              <li><a href="#">Lead Search</a></li>
              <li><a href="#">Company Search</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Video Tutorials</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Email Glossary</a></li>
              <li><a href="#">Sales Glossary</a></li>
              <li><a href="#">Companies Index</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Data Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">GDPR Compliance</a></li>
              <li><a href="#">Data Processing Agreement</a></li>
              <li><a href="#">Jobs</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Video Tutorials</a></li>
              <li><a href="#">Schedule a Demo</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Skrapp Private Limited is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Microsoft or LinkedIn, or any of their subsidiaries or affiliates.</p>
          <p>The name LinkedIn, as well as related names, marks, logos, emblems, and images are registered trademarks of their respective owners. Copyright © 2024 by Skrapp.io. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LeadSearch;
