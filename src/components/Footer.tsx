const Footer = () => {
  return (
    <section id="footer">
      <a
        href="https://www.linkedin.com/in/stephen-leander-551a6813a/"
        target="_blank"
        className="active"
      >
        <img
          src={require('../assets/icons/iconmonstr-linkedin-3.svg').default}
          alt=""
        />
      </a>
      <a
        href="https://github.com/sleander94"
        target="_blank"
        className="active"
      >
        <img
          src={require('../assets/icons/iconmonstr-github-1.svg').default}
          alt=""
        />
      </a>
    </section>
  );
};

export default Footer;
