import "./Navbar.scss";

const Navbar = () => (
  <header>
    <div className="logo">
      <p>KB</p>
    </div>
    <nav>
      <a href="https://resume.creddle.io/resume/itr2v0muan6" target="blank">
        RESUME
      </a>
      <a
        href="https://www.linkedin.com/in/kevin-brack-273a25a0/"
        target="blank"
      >
        <img
          src="/static/images/PSDin/iconmonstr-linkedin-2.png"
          width="19"
          height="19"
          alt=""
        />
      </a>
      <a href="https://www.github.com/KevinBrack" target="blank">
        <img
          src="/static/images/PSDin/iconmonstr-github-2.png"
          width="19"
          height="19"
          alt=""
        />
      </a>
      <a
        href="https://www.twitter.com/KevinBrack"
        target="blank"
        className="last-nav"
      >
        <img
          src="/static/images/PSDin/iconmonstr-twitter-2.png"
          width="19"
          height="19"
          alt=""
        />
      </a>
    </nav>
  </header>
);

export default Navbar;
