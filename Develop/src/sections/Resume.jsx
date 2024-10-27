import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/assets/resume.pdf" download>Download Resume</a>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        {/* Add more proficiencies here */}
      </ul>
    </section>
  );
}

export default Resume;
