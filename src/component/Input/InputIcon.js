import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import classnames from "classnames";
import Button from "../Button";

const InputIcon = props => {
  // props
  const { onClick, icon, className, ...attributes } = props;

  // function here
  const handleClick = e => {
    onClick && onClick();
  };

  // classes here
  const searchStyles = classnames("search", className);
  return (
    <div className={searchStyles}>
      <Input {...attributes} />
      <Button flat iconBtn onClick={handleClick} size="sm">
        {icon && icon}
      </Button>
    </div>
  );
};

InputIcon.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node
};

export default InputIcon;
