import React from "react";
import PropTypes from "prop-types";

// react router lib
import { NavLink } from "react-router-dom";

// styles
import Styles from "./NavLink.css";

const CustomNavLink = ({ children, ...props }) => {
  //  props destructuring
  const {
    location,
    match: { url }
  } = props;

  const routeTo = children
    .toLowerCase()
    .replace(/ /g, "")
    .replace(/[^A-Za-z0-9]/g, "");
  return (
    <NavLink
      className={`${Styles.navlink} nav-link`}
      activeClassName={`${Styles.active}`}
      to={`${url}/${routeTo}`}
    >
      {children}
    </NavLink>
  );
};

CustomNavLink.defaultProps = {
  Children: "navlink"
};

export default CustomNavLink;
