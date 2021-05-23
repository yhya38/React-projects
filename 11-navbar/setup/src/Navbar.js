import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const linksContainer = useRef(null);
  const link = useRef(null);

  useEffect(() => {
    const linksHeight = link.current.getBoundingClientRect().height;
    if (show) {
      linksContainer.current.style.height = `${linksHeight}px`;
    } else {
      linksContainer.current.style.height = "0px";
    }
  }, [show]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setShow(!show)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainer}>
          <ul className="links" ref={link}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
