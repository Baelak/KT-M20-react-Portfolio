import React from 'react';
import githubLogo from '../../public/assets/images/logos/footer-logo-github.png';
import deployLogo from '../../public/assets/images/logos/power-button-logo.png';
import startLogo from '../../public/assets/images/logos/start-button-logo.png';

import '../styles/portfolio.css'; 


function Portfolio() {
  const webProjects = [
    {
      title: 'Text Editor 🤍',
      deployLink: 'https://kt-m19-text-editor.onrender.com',
      repoLink: 'https://github.com/Baelak/KT-M19-text-Editor',
      backgroundImage: 'url("/public/assets/images/cards/text-editor-card.png")',
      description: 'A syntax highlighting text editor that can be installed and used offline.'
    },
    {
      title: 'Trivia 🤍',
      deployLink: 'https://baelak.github.io/P1-Trivia/',
      repoLink: 'https://github.com/Baelak/P1-Trivia',
      backgroundImage: 'url("./public/assets/images/cards/trivia-card.png")',
      description: 'DO YOU WANT TO PLAY A GAME? Fun trivia questions to test your knowledge.'
    },
    {
      title: 'Weather Dashboard',
      deployLink: 'https://baelak.github.io/KT-M6-weather-Dashboard/',
      repoLink: 'https://github.com/Baelak/KT-M6-weather-Dashboard',
      backgroundImage: 'url("./public/assets/images/cards/weather-dashboard-card.png")',
      description: 'Real-time weather updates and forecasts.'
    },
    {
        title: 'Tech Blog',
        deployLink: 'https://kt-m14-tech-blog.onrender.com',
        repoLink: 'https://github.com/Baelak/KT-M14-tech-Blog',
        backgroundImage: 'url("./public/assets/images/cards/tech-blog-card.png")',
        description: 'A platform for developers to share and explore tech-related articles.'
     }
];

  const cliProjects = [
    {
      title: 'Employee Tracker',
      deployLink: 'https://drive.google.com/file/d/1yKNUc_6bjwE3grIW2DnFPooJcKCb4lyc/view?usp=sharing',
      repoLink: 'https://github.com/Baelak/KT-M12-employee-Tracker',
      backgroundImage: 'url("./public/assets/images/cards/employee-tracker-card.png")',
      description: 'A command-line app for managing employee data.'
    },
    {
      title: 'E-Commerce Back End',
      deployLink: 'https://drive.google.com/file/d/1oA9P6FN421IdUsxls_Ykf_huHuLM8WsU/view?usp=sharing',
      repoLink: 'https://github.com/Baelak/KT-M12-employee-Tracker',
      backgroundImage: 'url("./public/assets/images/cards/e-commerce-back-end-card.png")',
      description: 'A back-end for e-commerce platforms with a SQL database.'
    },
    {
      title: 'Social Network API',
      deployLink: 'https://drive.google.com/file/d/12TP1-jtd9xIAc-h0q6LhpvRQyYGBV4iD/view?usp=drive_link',
      repoLink: 'https://github.com/Baelak/KT-M18-social-Network-API',
      backgroundImage: 'url("./public/assets/images/cards/social-network-api-card.png")',
      description: 'API for a social network application using a Mongo database.'
    },
    {
      title: 'SVG Logo Maker',
      deployLink: 'https://drive.google.com/file/d/1aEjNPkRp6DgLnnpQkN7-LeDddfG-Yql0/view?usp=sharing',
      repoLink: 'https://github.com/Baelak/KT-M10-SVG-Logo-Maker',
      backgroundImage: 'url("./public/assets/images/cards/svg-logo-maker-card.png")',
      description: 'Easily create customizable SVG logos with a simple CLI application.'
    }
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>

      <h3>Web Applications</h3>
      <div className="project-grid">
        {webProjects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ backgroundImage: project.backgroundImage }}
          >
            <div className="overlay">
              <div className="project-info">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                    <img src={deployLogo} alt="Deploy Link" />
                  </a>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub Repo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>Command Line Applications</h3>
      <div className="project-grid">
        {cliProjects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ backgroundImage: project.backgroundImage }}
          >
            <div className="overlay">
              <div className="project-info">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                    <img src={startLogo} alt="Start Link" />
                  </a>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub Repo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
