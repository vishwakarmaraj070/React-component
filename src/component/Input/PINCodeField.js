import React, { useState } from "react";
import PropTypes from "prop-types";
import { PinCodeIndia, PinCodeOutside } from "../../Pattern";
import { checkPattern } from "../../Validation";
import NumberField from "./NumberField";

const PINCodeField = props => {
  // props
  const { onKeyUp, required, outside, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      if (!outside) {
        const check = checkPattern(
          PinCodeIndia.pattern,
          PinCodeIndia.patternMsg,
          value
        );
        setError(check.msg);
      } else {
        const check = checkPattern(
          PinCodeOutside.pattern,
          PinCodeOutside.patternMsg,
          value
        );
        setError(check.msg);
      }
    } else {
      setError(null);
    }
  };
  return (
    <NumberField
      error={error}
      onKeyUp={handleKeyUp}
      exact={outside ? null : 6}
      {...attributes}
      required={required}
    />
  );
};

PINCodeField.propTypes = {
  onKeyUp: PropTypes.func,
  outside: PropTypes.bool,
  required: PropTypes.bool
};

export default PINCodeField;
