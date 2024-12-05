import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailFinder from './EmailFinder.js';
import EmailVerifier from './EmailVerifier.js';
import CompanySearch from './CompanySearch.js';
import LeadSearch from './LeadSearch.js';
import LeadFinder from './LeadFinder.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Email Finder */}
          <Route path="/email-finder" element={<EmailFinder />} />

          {/* Route for Email Verifier */}
          <Route path="/email-verifier" element={<EmailVerifier />} />

          {/* Route for Company Search */}
          <Route path="/company-search" element={<CompanySearch />} />

          {/* Route for Lead Search */}
          <Route path="/lead-search" element={<LeadSearch />} />

          {/* Route for Lead Search */}
          <Route path="/lead-finder" element={<LeadFinder />} />

          {/* Default Route */}
          <Route path="/" element={<EmailFinder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
