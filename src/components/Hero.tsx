const Hero = () => {
  return (
    <section id="home">
      <div className="hero-media">
        <img
          src={require('../assets/icons/android-chrome-512x512.png')}
          alt="SL initials icon"
        />
        <div className="heading-container">
          <h1>Stephen Leander</h1>
        </div>
        <a href="#about">{'>'}</a>
      </div>
    </section>
  );
};

export default Hero;
