import React from 'react';
import Navigation from './Navigation';

function Header({ setCurrentSection, currentSection }) {
  return (
    <header>
          <h1> Kaleab Teklemichael</h1>
      <Navigation setCurrentSection={setCurrentSection} currentSection={currentSection} />
    </header>
  );
}

export default Header;
