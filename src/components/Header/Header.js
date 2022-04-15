import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "600" : "normal",
      color: isActive ? "var(--accent-color)" : "black",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <>
      <header className="header">
        <ul className="actions-list">
          <li>Filter By:</li>
          <NavLink style={navLinkStyles} to="/favourite">
            <li>Favorites</li>
          </NavLink>
        </ul>
      </header>
    </>
  );
};

export default Header;
