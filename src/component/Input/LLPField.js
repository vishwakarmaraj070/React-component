import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { LLP } from "../../Pattern";
import { checkPattern } from "../../Validation";

const LLPField = props => {
  // props
  const { onKeyUp, required, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(LLP.pattern, LLP.patternMsg, value);
      setError(check.msg);
    } else {
      setError(null);
    }
  };
  return (
    <Input
      error={error}
      onKeyUp={handleKeyUp}
      exact={8}
      required={required}
      {...attributes}
    />
  );
};

LLPField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool
};

export default LLPField;
