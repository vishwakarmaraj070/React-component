import React from "react";
import PropTypes from "prop-types";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import classnames from "classnames";

const Tab = props => {
  // props
  const { items = [], className, icons, to, color, ...attributes } = props;

  // function here

  // classes here
  const tabsStyles = classnames("tabs", className);
  const tabStyles = classnames("tab", { [`tab-${color}`]: color });

  // render here
  return (
    <Router>
      <div className={tabsStyles} {...attributes}>
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={`${to ? to : ""}/${item.replace(/ /g, "").toLowerCase()}`}
            className={tabStyles}
          >
            {icons && <span className="mr-2">{icons[index]}</span>}
            {item}
          </NavLink>
        ))}
      </div>
    </Router>
  );
};

Tab.defaultProps = {
  color: "primary"
};

Tab.propTypes = {
  color: PropTypes.string,
  items: PropTypes.array.isRequired,
  icons: PropTypes.array,
  to: PropTypes.string
};

export default Tab;
