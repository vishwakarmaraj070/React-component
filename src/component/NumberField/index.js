import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import { checkExactLength } from "../../Validation";

const NumberField = props => {
  // distruchuring props
  const { maxLength, exact, onChange, ...attributes } = props;
  const [value, setValue] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const handleOnChange = e => {
    onChange && onChange(e);
    if (exact) {
      if (e.target.value.length <= exact) {
        const check = checkExactLength(e.target.value, exact);
        if (check.msg) {
          setErrorMsg(check.msg);
        } else {
          setErrorMsg(null);
        }
        setValue(e.target.value);
      }
    }

    if (maxLength) {
      if (e.target.value.length <= maxLength) {
        setValue(e.target.value);
      }
    }

    if (!exact && !maxLength) {
      setValue(e.target.value);
    }
  };

  return (
    <>
      <Input
        type="number"
        error={errorMsg}
        {...attributes}
        value={value}
        onChange={handleOnChange}
      />
    </>
  );
};

NumberField.propTypes = {
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
  exact: PropTypes.number
};

export default NumberField;
