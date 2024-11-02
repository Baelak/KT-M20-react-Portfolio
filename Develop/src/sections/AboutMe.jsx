import React from 'react';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img src="/assets/images/profile.png" alt="Developer" 
       style={{ maxWidth: '600px', maxHeight: '600px', width: 'auto', height: 'auto' }}
      />
      <h3>Hi there! 😊 I am Kaleab, I am a full stack developer with an eye for design and organization.
        I enjoy the balance of design and technology, making sure that what I build is not only effective but also visually appealing.
        <br/>
        <br/>
        My goal is to create intuitive and organized user experiences, and I find joy in solving complex problems.
        I’m always eager to learn and grow in my craft, embracing new challenges along the way.</h3>
    </section>
  );
}

export default AboutMe;
