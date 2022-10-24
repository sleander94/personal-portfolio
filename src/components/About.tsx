const About = () => {
  return (
    <section id="about">
      <div className="about-header">
        <div></div>
        <h1>About Me</h1>
        <div></div>
      </div>
      <div className="personal-info">
        <img
          src={require('../assets/stephenheadshot.jpeg')}
          alt="Stephen Leander headshot"
        ></img>
        <div className="about-text">
          <p>
            I'm a highly driven, Colorado-based professional with growing
            experience creating responsive, full stack web apps. I love
            challenging myself by building new things and adding technologies to
            my arsenal.
          </p>
          <p>
            Currently, I am transitioning into a technology career from
            leadership roles in the cannabis and community education sectors.
            Leveraging a strong background in high-tech agricultural production,
            I bring extensive experience managing highly collaborative teams
            tasked with mission critical workflows.
          </p>
          <p>
            When I'm not at my computer, you can probably find me somewhere in
            the mountains.
          </p>
        </div>
      </div>
      <a
        href="https://drive.google.com/uc?export=download&id=1lqjHi08A7h3X1jlaEo8nDZMvm5-KfHgt"
        download
      >
        Download Resume
      </a>
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
            src={
              require('../assets/icons/express-original-wordmark.svg').default
            }
            alt=""
            className="express"
          />
          <img
            src={require('../assets/icons/mongodb-plain-wordmark.svg').default}
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
