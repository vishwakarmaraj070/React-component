import React, { useEffect } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Notification = props => {
  const {
    color,
    show,
    children,
    position,
    toggle,
    className,
    ...attributes
  } = props;

  const toastClasses = classnames(
    `toast toast-${color}`,
    position,
    show && "show",
    className
  );

  useEffect(() => {
    setTimeout(() => {
      toggle(false);
    }, 5000);
  }, [show, toggle]);

  return (
    <div data-test="notification" className={toastClasses} {...attributes}>
      {children}
    </div>
  );
};
Notification.defaultProps = {
  color: "primary",
  position: "top-right"
};

Notification.propTypes = {
  color: PropTypes.string,
  show: PropTypes.bool,
  children: PropTypes.node.isRequired,
  toggle: PropTypes.func,
  position: PropTypes.oneOf([
    "center",
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ])
};

export default Notification;
