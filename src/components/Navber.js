import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

const Navber = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div>
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button
              type="button"
              className="nav-toggle"
              id="nav-toggle"
              onClick={toggleLinks}
            >
              <FaBars />
            </button>
          </div>
        </div>
        <div
          className="links-container nav-header"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <ul className="nav-icons">
            {socialLinks.map((app) => {
              return (
                <li key={app.id}>
                  <a href={app.href} target="_blank" className="social-icons">
                    <i className={app.className}></i>
                  </a>
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
    </nav>
  );
};
export default Navber;
