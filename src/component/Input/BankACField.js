import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { BankAccount } from "../../Pattern";
import { checkPattern } from "../../Validation";

const BankACField = props => {
  // props
  const { onKeyUp, required, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(
        BankAccount.pattern,
        BankAccount.patternMsg,
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
      required={required}
      {...attributes}
    />
  );
};

BankACField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool
};

export default BankACField;
