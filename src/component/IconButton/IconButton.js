import React from "react";
import PropTypes from "prop-types";

const IconButton = props => {
  // props destructuring
  const { icon, title, color, className, onClick, type, disabled } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`btn-icon-${color} ${className}`}
    >
      <span className={`${title ? "mr-2" : ""}`}>{icon}</span>
      <span>{title}</span>
    </button>
  );
};

IconButton.defaultProps = {
  color: "primary",
  className: null,
  onClick: function() {
    console.log("function required");
  },
  type: "button",
  disabled: false,
  title: null,
  icon: null
};

IconButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "warning",
    "purple",
    "green"
  ]).isRequired,
  title: PropTypes.string,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
  disabled: PropTypes.bool
};

export default IconButton;
