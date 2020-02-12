import React, { useState } from "react";
import PropTypes from "prop-types";
import NumberField from "./NumberField";
import {
  AmountWithoutDecimal,
  AmountWithoutDecimalNoNegative
} from "../../Pattern";
import { checkPattern } from "../../Validation";

const AmountWithoutDecimalField = props => {
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
          AmountWithoutDecimal.pattern,
          AmountWithoutDecimal.patternMsg,
          value
        );
        setError(check.msg);
      } else {
        const check = checkPattern(
          AmountWithoutDecimalNoNegative.pattern,
          AmountWithoutDecimalNoNegative.patternMsg,
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
      maxLength={16}
      {...attributes}
    />
  );
};

AmountWithoutDecimalField.propTypes = {
  onKeyUp: PropTypes.func,
  noNegative: PropTypes.bool,
  required: PropTypes.bool
};

export default AmountWithoutDecimalField;
