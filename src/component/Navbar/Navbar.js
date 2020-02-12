import React, { useState } from "react";
import PropTypes from "prop-types";

// components
import CustomNavLink from "./CustomNavLink/CustomNavLink";

// styles
import Styles from "./Navbarstyles.css";

export default function Navbar(props) {
  // menu toggle state
  const [menuHeight, setMenuHeight] = useState("0px");

  const { left, right, className, middle } = props;
  console.log(menuHeight);
  // components
  return (
    <nav className={`navbar ${Styles.right} ${className}`}>
      <div className={`flex align-items-center`}>
        <div className={`navitem mr-8 ${Styles.navitem}`}>{left}</div>
        <div
          className={` ${Styles.navitem} ${
            middle.length === 0
              ? Styles.navbar_sm_breakpoint
              : middle.length > 3 && middle.length < 5
              ? Styles.navbar_md_breakpoint
              : middle.length > 5
              ? Styles.navbar_lg_breakpoint
              : ""
          }`}
        >
          {middle.map((item, index) => {
            return (
              <CustomNavLink key={index} {...props}>
                {item}
              </CustomNavLink>
            );
          })}
        </div>
      </div>
      <div
        className={` ${Styles.navitem} ${
          middle.length === 0
            ? Styles.navbar_sm_breakpoint
            : middle.length > 3 && middle.length < 5
            ? Styles.navbar_md_breakpoint
            : middle.length > 5
            ? Styles.navbar_lg_breakpoint
            : ""
        }`}
      >
        {right}
      </div>
      <div
        className={`${Styles.navbar_menu} ${
          middle.length === 0
            ? Styles.navbar_sm_menu
            : middle.length > 3 && middle.length < 5
            ? Styles.navbar_md_menu
            : middle.length > 5
            ? Styles.navbar_lg_menu
            : ""
        } `}
      >
        <div onClick={() => setMenuHeight(`300px`)}>&#9776;</div>
        <div
          className={`${Styles.mobilemenu}`}
          style={{ "--menuheight": menuHeight }}
        >
          <div onClick={() => setMenuHeight(`0px`)}>&#8250;</div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  className: "",
  middle: []
};

Navbar.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  middle: PropTypes.array,
  className: PropTypes.string
};
