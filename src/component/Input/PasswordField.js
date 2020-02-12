import React, { useState } from "react";
import PropTypes from "prop-types";
import { Password } from "../../Pattern";
import { checkPattern } from "../../Validation";

import Input from "./Input";
import classnames from "classnames";
import IconButton from "../IconButton";

const PasswordField = props => {
  // props
  const {
    onKeyUp,
    className,
    icon,
    type,
    onClick,
    required,
    ...attributes
  } = props;
  const [error, setError] = useState();

  // classes here
  const searchStyles = classnames("search", className);

  // function here
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(Password.pattern, Password.patternMsg, value);
      setError(check.msg);
    } else {
      setError(null);
    }
  };

  const handleClick = e => {
    onClick && onClick(e);
  };
  return (
    <div className={searchStyles}>
      <Input
        error={error}
        type={type}
        onKeyUp={handleKeyUp}
        required={required}
        {...attributes}
      />
      {icon && (
        <IconButton flat onClick={handleClick} size="sm">
          {icon}
        </IconButton>
      )}
    </div>
  );
};

PasswordField.defaultProps = {
  required: true,
  type: "password"
};
PasswordField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool,
  icon: PropTypes.node,
  type: PropTypes.string
};

export default PasswordField;
