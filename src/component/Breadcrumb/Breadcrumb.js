import React from "react";
import PropTypes from "prop-types";

// components
import { NavLink } from "react-router-dom";

// styles
import Styles from "./Breadcrumb.css";

// components
import Dropdown from "../../willDepercate/Dropdown/Dropdown";

const Breadcrumb = ({ links, to, option, ...props }) => {
  // props destructuring
  const {
    location: { pathname }
  } = props;

  // breadcrub history
  const history = pathname
    .split("/")
    .filter(link => link !== "" && link !== "dashboard");

  return (
    <div className={`card flex justify-between ${Styles.container} mb-6`}>
      <div className={`flex align-items-center text-primary `}>
        {/* default home link */}
        <NavLink
          activeClassName={`${Styles.active}`}
          className={`${Styles.link} text-primary`}
          to={to === "#" ? `/dashboard` : to}
        >
          &#x2616;
          <span className="ml-2">&#x276F;</span>
        </NavLink>
        {/* links maps of history */}
        {history.map((link, i) => {
          return (
            <NavLink
              key={i}
              className={`${Styles.link} Small-Body-Copy-RegularSmall-body-copy-Regular-Default text-capitalize`}
              activeClassName={`${Styles.active}`}
              to={`${pathname}`}
            >
              {link}
              <span className="ml-2">&#x276F;</span>
            </NavLink>
          );
        })}
      </div>
      {/* dropdown */}
      {option && (
        <Dropdown
          size="sm"
          color="primary"
          className={`${Styles.dropdown} ml-5`}
          option={option}
        />
      )}
    </div>
  );
};

Breadcrumb.defaultProps = {
  links: ["Entity", "GST", "GST Dashboard"],
  to: "#",
  option: null
};

Breadcrumb.protoType = {
  link: PropTypes.array.isRequired,
  to: PropTypes.string.isRequired,
  option: PropTypes.array.isRequired
};

export default Breadcrumb;
