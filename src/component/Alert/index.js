import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { ReactComponent as Close } from "./multiply.svg";

const Alert = props => {
  // props
  const {
    className,
    color,
    open,
    isOpen,
    onClick,
    children,
    ...attributes
  } = props;

  const alertRef = useRef();
  const [alertStyle, setStyle] = useState({});
  // classes

  const alertClass = classnames(
    "r-alert",
    { [`alert-${color}`]: color, open },
    className
  );

  const handleAlertClick = e => {
    onClick && onClick(e);
  };

  const handleAlertClose = e => {
    isOpen && isOpen(false);
  };

  useEffect(() => {
    try {
      if (open) {
        setStyle({ height: alertRef.current.scrollHeight + 35 + "px" });
      } else {
        setStyle({ height: "0px" });
      }
    } catch (error) {
      console.log(error);
    }
  }, [open]);

  return (
    <div
      className={alertClass}
      ref={alertRef}
      style={alertStyle}
      onClick={handleAlertClick}
      {...attributes}
    >
      <span className="close" onClick={handleAlertClose}>
        <Close />
      </span>
      {children}
    </div>
  );
};

Alert.defaultProps = {
  color: "danger"
};

Alert.propTypes = {
  color: PropTypes.string,
  open: PropTypes.bool,
  isOpen: PropTypes.func,
  onClick: PropTypes.func
};

export default Alert;
