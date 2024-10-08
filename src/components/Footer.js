import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((app) => {
          return (
            <li key={app.id}>
              <a href={app.href} target="_blank" className="footer-icon">
                <i className={app.className}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Jongsung(Jason) Yoo
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
