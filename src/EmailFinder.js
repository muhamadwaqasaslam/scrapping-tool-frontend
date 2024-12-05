import React, { useState } from "react";
import "./EmailFinder.css";
import "font-awesome/css/font-awesome.min.css";
import logo from "./logo.png"; // Import the logo image

function EmailFinder() {
  const [searchResult, setSearchResult] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle navbar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility

  const handleSearch = () => {
    // Dummy data for now; in a real application, replace this with an API call.
    setSearchResult({
      domain: "questdiagnostics.com",
      email: "sameer@questdiagnostics.com",
      name: "Sameer Ahmad",
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsNavOpen(false); // Hide the navbar when sidebar is open
  };

  return (
    <div className="email-finder-container">
      <header className="header">
        <nav className="navbar">
          {/* Logo Image */}
          <img
            src={logo}
            alt="Logo"
            className={`logo ${isSidebarOpen ? "hide" : ""}`}
          />
          <button className="nav-toggle" onClick={toggleSidebar}>
            &#9776; {/* Hamburger icon */}
          </button>
          <div className={`nav-links ${isNavOpen ? "active" : ""}`}>
            <a href="/" className="nav-link">
              Email Finder
            </a>
            <a href="/email-verifier" className="nav-link">
              Email Verifier
            </a>{" "}
            {/* Corrected here */}
            <a href="/lead-search" className="nav-link">
              Lead Search
            </a>
            <a href="/company-search" className="nav-link">
              Company Search
            </a>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <a href="/" className="nav-link" onClick={toggleSidebar}>
          Email <span>Finder</span>
        </a>
        <a href="/email-verifier" className="nav-link" onClick={toggleSidebar}>
          Email Verifier
        </a>{" "}
        {/* Corrected here */}
        <a href="/lead-search" className="nav-link" onClick={toggleSidebar}>
          Lead Search
        </a>
        <a href="/company-search" className="nav-link" onClick={toggleSidebar}>
          Company Search
        </a>
      </div>

      <main className="main-content-email-finder">
        <h2>
          Email <span>Finder</span>
        </h2>
        <p>
          Find valid email addresses of anyone. Start the lookup with a name and
          a company.
        </p>

        <div className="form-container">
          <input type="text" placeholder="Full name" className="input-field" />
          <input
            type="text"
            placeholder="Company name or website"
            className="input-field"
          />
        </div>
        <button className="find-email-button" onClick={handleSearch}>
          <i className="fa fa-search search-icon"></i>{" "}
          {/* FontAwesome search icon */}
          Find Email
        </button>

        {searchResult && (
          <div className="result-container">
            <div className="result-info">
              <div className="item">
                <span className="label">Domain:</span>
                <span className="domain">{searchResult.domain}</span>
              </div>

              <div className="item">
                <span className="label">Email:</span>
                <a href={`mailto:${searchResult.email}`} className="email">
                  {searchResult.email}
                </a>
              </div>

              <div className="item">
                <span className="label">Name:</span>
                <span className="name">{searchResult.name}</span>
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className="footer-emailFinder">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#">LinkedIn Email Finder</a>
              </li>
              <li>
                <a href="#">Email Finder</a>
              </li>
              <li>
                <a href="#">Lead Search</a>
              </li>
              <li>
                <a href="#">Company Search</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Video Tutorials</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Email Glossary</a>
              </li>
              <li>
                <a href="#">Sales Glossary</a>
              </li>
              <li>
                <a href="#">Companies Index</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Data Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">GDPR Compliance</a>
              </li>
              <li>
                <a href="#">Data Processing Agreement</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Video Tutorials</a>
              </li>
              <li>
                <a href="#">Schedule a Demo</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Skrapp Private Limited is not affiliated, associated, authorized,
            endorsed by, or in any way officially connected with Microsoft or
            LinkedIn, or any of their subsidiaries or affiliates.
          </p>
          <p>
            The name LinkedIn, as well as related names, marks, logos, emblems,
            and images are registered trademarks of their respective owners.
            Copyright © 2024 by Skrapp.io. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default EmailFinder;
