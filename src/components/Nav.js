import React from "react";
import "./Nav.css";
import { useEffect, useState } from "react";

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll",handleShow);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        className="logo"
        alt="netflix-logo"
      />
      <img
        src="https://t3.ftcdn.net/jpg/01/46/73/66/360_F_146736659_ZAp1o10bUUTdUnSADzZpKm9zNs11Vb1u.jpg"
        className="avatar"
        alt="avatar"
      />
    </div>
  );
};

export default Nav;
