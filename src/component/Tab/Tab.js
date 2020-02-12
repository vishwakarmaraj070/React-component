import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Tab = ({ items, icons, to, color }) => {
  return (
    <>
      <div className="flex tabs">
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={`${to}/${item.replace(/ /g, "").toLowerCase()}`}
            className={`tab-${color}`}
          >
            {icons && <span className="mr-2">{icons[index]}</span>}
            {item}
          </NavLink>
        ))}
      </div>
    </>
  );
};

Tab.defaultProps = {
  items: ["Home ", "Home 2"],
  icons: null,
  color: "primary"
};

Tab.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "warning",
    "purple",
    "green"
  ]).isRequired,
  items: PropTypes.array.isRequired,
  icons: PropTypes.array,
  to: PropTypes.string.isRequired
};

export default Tab;
