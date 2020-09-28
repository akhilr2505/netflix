import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
      />
      <img
        className="nav_avatar"
        src="https://www.canva.com/design/DAECEVdF6go/view"
        alt="Netflix logo"
      />

      {/*<img className="nav_avatar" 
            src=""
            alt="Netflix Logo"
        />*/}
    </div>
  );
}

export default Nav;
//https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg
