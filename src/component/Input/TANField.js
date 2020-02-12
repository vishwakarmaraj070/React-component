import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { TAN } from "../../Pattern";
import { checkPattern } from "../../Validation";

const TANField = props => {
  // props
  const { onKeyUp, required, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(TAN.pattern, TAN.patternMsg, value);
      setError(check.msg);
    } else {
      setError(null);
    }
  };
  return (
    <Input
      error={error}
      onKeyUp={handleKeyUp}
      exact={10}
      required={required}
      {...attributes}
    />
  );
};

TANField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool
};

export default TANField;
