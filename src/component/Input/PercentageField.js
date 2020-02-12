import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { Percentage } from "../../Pattern";
import { checkPattern } from "../../Validation";

const PercentageField = props => {
  // props
  const { onKeyUp, required, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(
        Percentage.pattern,
        Percentage.patternMsg,
        value
      );
      setError(check.msg);
    } else {
      setError(null);
    }
  };
  return (
    <Input
      error={error}
      onKeyUp={handleKeyUp}
      maxLength={6}
      required={required}
      {...attributes}
    />
  );
};

PercentageField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool
};

export default PercentageField;
