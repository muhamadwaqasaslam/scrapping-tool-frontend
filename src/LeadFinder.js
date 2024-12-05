import React, { useState, useEffect } from "react";
import "./LeadFinder.css";
import  logo from "./logo.png";



const LeadFinder = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [isSidebarHidden, setIsSidebarHidden] = useState(false); // State for hiding sidebar
  
    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
      setIsSidebarHidden(!isSidebarHidden);
    };
  
    // Function to set initial sidebar visibility based on screen size
    const updateSidebarVisibility = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarHidden(true); // Hide sidebar on small screens
      } else {
        setIsSidebarHidden(false); // Show sidebar on larger screens
      }
    };
  
    useEffect(() => {
      // Set initial visibility based on screen size
      updateSidebarVisibility();
  
      // Add event listener to handle window resizing
      window.addEventListener("resize", updateSidebarVisibility);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", updateSidebarVisibility);
      };
    }, []);

  const toggleSidebarnavbar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsNavOpen(false);
  };

  const sampleData = [
    { firstName: "John", lastName: "Doe", designation: "Developer", location: "New York", company: "TechCorp", email: "john.doe@techcorp.com" },
    { firstName: "Jane", lastName: "Smith", designation: "Designer", location: "Los Angeles", company: "CreativeHub", email: "jane.smith@creativehub.com" },
    { firstName: "Alice", lastName: "Johnson", designation: "Manager", location: "Chicago", company: "BizGroup", email: "alice.johnson@bizgroup.com" },
    { firstName: "Bob", lastName: "Brown", designation: "CEO", location: "Miami", company: "InnovateX", email: "bob.brown@innovatex.com" },
    { firstName: "Tom", lastName: "Davis", designation: "CTO", location: "San Francisco", company: "TechWave", email: "tom.davis@techwave.com" },
    { firstName: "Emily", lastName: "Wilson", designation: "HR", location: "Houston", company: "PeopleFirst", email: "emily.wilson@peoplefirst.com" },
    { firstName: "Michael", lastName: "Taylor", designation: "Developer", location: "Austin", company: "CodeFactory", email: "michael.taylor@codefactory.com" },
    { firstName: "Sophia", lastName: "Moore", designation: "Designer", location: "Dallas", company: "DesignLab", email: "sophia.moore@designlab.com" },
    { firstName: "David", lastName: "Martinez", designation: "Sales", location: "Phoenix", company: "SalesForce", email: "david.martinez@salesforce.com" },
    { firstName: "Charlotte", lastName: "Hernandez", designation: "Marketing", location: "Seattle", company: "BrandUp", email: "charlotte.hernandez@brandup.com" },
    { firstName: "John", lastName: "Doe", designation: "Developer", location: "New York", company: "TechCorp", email: "john.doe@techcorp.com" },
    { firstName: "Jane", lastName: "Smith", designation: "Designer", location: "Los Angeles", company: "CreativeHub", email: "jane.smith@creativehub.com" },
    { firstName: "Alice", lastName: "Johnson", designation: "Manager", location: "Chicago", company: "BizGroup", email: "alice.johnson@bizgroup.com" },
    { firstName: "Bob", lastName: "Brown", designation: "CEO", location: "Miami", company: "InnovateX", email: "bob.brown@innovatex.com" },
    { firstName: "Tom", lastName: "Davis", designation: "CTO", location: "San Francisco", company: "TechWave", email: "tom.davis@techwave.com" },
    { firstName: "Emily", lastName: "Wilson", designation: "HR", location: "Houston", company: "PeopleFirst", email: "emily.wilson@peoplefirst.com" },
    { firstName: "Michael", lastName: "Taylor", designation: "Developer", location: "Austin", company: "CodeFactory", email: "michael.taylor@codefactory.com" },
    { firstName: "Sophia", lastName: "Moore", designation: "Designer", location: "Dallas", company: "DesignLab", email: "sophia.moore@designlab.com" },
    { firstName: "David", lastName: "Martinez", designation: "Sales", location: "Phoenix", company: "SalesForce", email: "david.martinez@salesforce.com" },
    { firstName: "Charlotte", lastName: "Hernandez", designation: "Marketing", location: "Seattle", company: "BrandUp", email: "charlotte.hernandez@brandup.com" }

  ];

  return (
   <div className="main-container">
    {/* Sidebar */}
    <div className={`main-sidebar ${isSidebarHidden ? 'hidden' : ''}`}>
      <div className="logo-section">
        {/* Logo Image */}
        <img src={logo} alt="Logo" className={`logo-img ${isSidebarHidden ? 'hidden-logo' : ''}`} />

        {/* Menu Icon to toggle sidebar */}
        <div className="menu-icon" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {!isSidebarHidden && (
        <>
          <div className="plan">
            <p className="free-plan">Free Plan</p>
            <button className="upgrade-btn">Upgrade</button>
            <div className="usage">
              <div>
                <span>Email Searches</span>
                <span className="usage-count">5/100</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "5%" }}></div>
              </div>
              <div>
                <span>Email Verifications</span>
                <span className="usage-count">2/200</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "1%" }}></div>
              </div>
            </div>
          </div>

          <div className="lists">
            <p>LISTS (1)</p>
            <button className="new-list-btn">+ New List</button>
            <ul className="list-items">
              <li>Employees</li>
            </ul>
          </div>

          <div className="sidebar-footer">
            <ul>
              <li>Help Center</li>
              <li>Video Tutorials</li>
              <li>Upgrade</li>
              <li>API Documentation</li>
            </ul>
          </div>
        </>
      )}
    </div>

    {/* Second Menu Icon (Only visible when sidebar is hidden) */}
    {isSidebarHidden && (
      <div className="menu-icon-hidden" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    )}

      {/* Main Content Section */}
      <div className={`main-content ${isSidebarHidden ? 'shifted' : ''}`}>
        {/* Navbar */}
        <header className={`header header-leadFinder ${isSidebarHidden ? "no-margin" : ""}`}>
        <nav className="navbar-leadfinder">

          <button className="nav-toggle" onClick={toggleSidebarnavbar}>
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

        {/* Body Content */}
        <div className="body-content">
          <div className="lead-search">
            <h2>Lead Search</h2>
            <hr className="heading-line" />
            {/* Input fields */}
            <div className="input-container">
              <input type="text" placeholder="Name" className="search-input" />
              <input type="text" placeholder="Job Title" className="search-input" />
              <input type="text" placeholder="Location" className="search-input" />
            </div>
            <div className="search-actions">
              <button className="search-btn">Search</button>
              <button className="reset-btn">Reset Filters</button>
            </div>
          </div>

          <div className="data-table">
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Designation</th>
                  <th>Location</th>
                  <th>Company Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.designation}</td>
                    <td>{data.location}</td>
                    <td>{data.company}</td>
                    <td>{data.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadFinder;