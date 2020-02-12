import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { Email } from "../../Pattern";
import { checkPattern } from "../../Validation";

const EmailField = props => {
  // props
  const { onKeyUp, required, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(Email.pattern, Email.patternMsg, value, "i");
      setError(check.msg);
    } else {
      setError(null);
    }
  };
  return (
    <Input
      type="email"
      error={error}
      onKeyUp={handleKeyUp}
      required={required}
      {...attributes}
    />
  );
};

EmailField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool
};

export default EmailField;
