import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { CIN } from "../../Pattern";
import { checkPattern } from "../../Validation";

const CINField = props => {
  // props
  const { onKeyUp, required, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(CIN.pattern, CIN.patternMsg, value);
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

CINField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool
};

export default CINField;
