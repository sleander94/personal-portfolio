const About = () => {
  return (
    <section id="about">
      <div className="about-header">
        <div></div>
        <h1>About Me</h1>
        <div></div>
      </div>
      <div className="personal-info">
        <img src={require('../assets/stephenheadshot.jpeg')}></img>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad culpa
          possimus numquam iure, quis quam minus vitae, aliquid consequatur
          natus molestiae sequi quae modi. Minima aspernatur quia consequatur
          voluptate accusamus?
        </p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="icons">
          <img
            src={require('../assets/icons/html5-plain-wordmark.svg').default}
            alt=""
          />
          <img
            src={require('../assets/icons/css3-plain-wordmark.svg').default}
            alt=""
          />
          <img
            src={require('../assets/icons/javascript-plain.svg').default}
            alt=""
          />
          <img
            src={require('../assets/icons/typescript-plain.svg').default}
            alt=""
          />
          <img
            src={require('../assets/icons/sass-original.svg').default}
            alt=""
          />
          <img
            src={require('../assets/icons/tailwindcss-plain.svg').default}
            alt=""
          />

          <img
            src={require('../assets/icons/react-original-wordmark.svg').default}
            alt=""
          />
          <img
            src={require('../assets/icons/nodejs-plain-wordmark.svg').default}
            alt=""
          />
          <img
            src={require('../assets/icons/firebase-plain-wordmark.svg').default}
            alt=""
          />
          <img
            src={require('../assets/icons/git-plain-wordmark.svg').default}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
