import "./Footer.scss";

const Footer = () => (
  <footer>
    <div className="icon-wrapper">
      <a href="https://www.linkedin.com/in/kevin-brack-273a25a0/">
        <img
          src="/static/images/PSDin/iconmonstr-linkedin-2_copy.png"
          width="50"
          height="50"
          alt=""
        />
      </a>
      <a href="https://github.com/KevinBrack">
        <img
          src="/static/images/PSDin/iconmonstr-github-2_copy.png"
          width="50"
          height="50"
          alt=""
        />
      </a>
      <a href="https://twitter.com/KevinBrack">
        <img
          src="/static/images/PSDin/iconmonstr-twitter-2_copy.png"
          width="50"
          height="50"
          alt=""
        />
      </a>
      <div id="email-button">
        <img
          src="/static/images/PSDin/iconmonstr-gmail-2.png"
          width="50"
          height="50"
          alt=""
        />
      </div>
      <div id="phone-button">
        <img
          src="/static/images/PSDin/PhoneIcon.png"
          width="50"
          height="50"
          alt=""
        />
      </div>
    </div>
    <div id="contact-display">
      <p>
        brackkevin@gmail.com
        <br />
        (219)613-1813
      </p>
    </div>
    <p className="copyright">© Kevin Brack 2019</p>
  </footer>
);

export default Footer;
