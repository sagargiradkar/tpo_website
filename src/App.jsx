import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import About from './pages/About/About';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import DepartmentLabs from './pages/Departments/DepartmentLabs';
import FAQ from './pages/FAQ/FAQ';
import Feedback from './pages/Feedback/Feedback';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/labs/:department" element={<DepartmentLabs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
