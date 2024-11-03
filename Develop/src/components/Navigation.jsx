import React, { useState } from 'react';
import '../styles/navigation.css';

function Navigation({ setCurrentSection, currentSection }) {
  const sections = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <button className="hamburger-icon" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {sections.map((section) => (
          <li key={section}>
            <button
              className={currentSection === section ? 'active' : ''}
              onClick={() => {
                setCurrentSection(section);
                setIsMenuOpen(false); // Close menu after selecting
              }}
            >
              {section.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
