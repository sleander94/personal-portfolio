const Footer = () => {
  return (
    <section id="footer">
      <a
        href="https://www.linkedin.com/in/stephen-leander-551a6813a/"
        target="_blank"
        rel="noreferrer"
        className="active"
      >
        <img
          src={require('../assets/icons/iconmonstr-linkedin-3.svg').default}
          alt="LinkedIn profile link"
        />
      </a>
      <a
        href="https://github.com/sleander94"
        target="_blank"
        rel="noreferrer"
        className="active"
      >
        <img
          src={require('../assets/icons/iconmonstr-github-1.svg').default}
          alt="Github profile link"
        />
      </a>
    </section>
  );
};

export default Footer;
