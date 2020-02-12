import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Button from "../Button";

const IconButton = props => {
  const { children, ClassName, ...attributes } = props;

  const iconBtnStyle = classnames("icon-btn", ClassName);
  return (
    <Button className={iconBtnStyle} {...attributes}>
      {children}
    </Button>
  );
};

IconButton.propTypes = {};

export default IconButton;
