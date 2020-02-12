import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

const ConfirmPasswordField = props => {
  // props
  const { onKeyUp, password, required, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      if (password === value) {
        setError("");
        console.log("match");
      } else {
        console.log("not mat");

        setError("Confirm Password did not match");
      }
    } else {
      setError(null);
    }
  };
  return (
    <Input
      error={error}
      type="password"
      onKeyUp={handleKeyUp}
      required={required}
      {...attributes}
    />
  );
};

ConfirmPasswordField.defaultProps = {
  required: true,
  password: ""
};

ConfirmPasswordField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool,
  password: PropTypes.string
};

export default ConfirmPasswordField;
