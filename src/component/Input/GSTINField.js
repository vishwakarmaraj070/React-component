import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { GSTIN } from "../../Pattern";
import { checkPattern } from "../../Validation";

const GSTINField = props => {
  // props
  const { onKeyUp, required, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(GSTIN.pattern, GSTIN.patternMsg, value);
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

GSTINField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool
};

export default GSTINField;
