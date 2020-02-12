import React, { useState } from "react";
import PropTypes from "prop-types";
import NumberField from "./NumberField";
import { AmountWithDecimal, AmountWithDecimalNoNegative } from "../../Pattern";
import { checkPattern } from "../../Validation";

const AmountWithDecimalField = props => {
  // props
  const { onKeyUp, required, noNegative, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      if (!noNegative) {
        const check = checkPattern(
          AmountWithDecimal.pattern,
          AmountWithDecimal.patternMsg,
          value
        );
        setError(check.msg);
      } else {
        const check = checkPattern(
          AmountWithDecimalNoNegative.pattern,
          AmountWithDecimalNoNegative.patternMsg,
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
      required={required}
      maxLength={14}
      {...attributes}
    />
  );
};

AmountWithDecimalField.propTypes = {
  onKeyUp: PropTypes.func,
  noNegative: PropTypes.bool,
  required: PropTypes.bool
};

export default AmountWithDecimalField;
