import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <br/>
      <a href="/assets/Kaleab Teklemichael Resume.pdf" download>
      Download My Resume
      <img src='./public/assets/images/logos/download-button-logo.png'></img></a>
      <br/>

      <h4> Front End Proficiencies</h4>
      <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
      </ul>
      
      <h4> Back End Proficiencies </h4>
      <ul>
            <li>APIs</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
      </ul>
    </section>
  );
}

export default Resume;
