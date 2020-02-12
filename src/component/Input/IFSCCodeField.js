import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { IFSCCode } from "../../Pattern";
import { checkPattern } from "../../Validation";

const IFSCCodeField = props => {
  // props
  const { onKeyUp, required, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(IFSCCode.pattern, IFSCCode.patternMsg, value);
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
      exact={11}
      {...attributes}
    />
  );
};

IFSCCodeField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool
};

export default IFSCCodeField;
