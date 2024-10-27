import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    { title: 'Project 1', deployLink: '#', repoLink: '#' },
    // Add more project data here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
}

export default Portfolio;
