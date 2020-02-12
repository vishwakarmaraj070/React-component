import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { checkPattern } from "../../Validation";

const PatternField = props => {
  // props
  const { onKeyUp, required, pattern, patternMsg, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(pattern, patternMsg, value);
      setError(check.msg);
    } else {
      setError(null);
    }
  };
  return (
    <Input
      error={error}
      onKeyUp={handleKeyUp}
      required={required}
      {...attributes}
    />
  );
};

PatternField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool,
  patternMsg: PropTypes.string,
  pattern: PropTypes.string
};

export default PatternField;
