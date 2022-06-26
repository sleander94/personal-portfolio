const Navbar = () => {
  let sections = document.querySelectorAll('section');
  let menu = document.querySelectorAll('nav a');
  window.onscroll = () => {
    sections.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop - 54;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');
      if (top >= offset && top < offset + height) {
        menu.forEach((link) => {
          link.classList.remove('active');

          document
            .querySelector('nav a[href*=' + id + ']')!
            .classList.add('active');
        });
      }
    });
  };

  return (
    <nav>
      <a href="#home" className="active">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
