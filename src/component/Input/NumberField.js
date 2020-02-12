import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { checkExactLength } from "../../Validation";

const NumberField = props => {
  // distruchuring props
  const {
    maxLength,
    exact,
    value,
    minLength,
    defaultValue,
    required,
    onChange,
    ...attributes
  } = props;
  const [nvalue, setValue] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const handleOnChange = e => {
    const value = e.target.value;
    if (value.length) {
      if (minLength) {
        if (value.length >= minLength) {
          setErrorMsg(null);
        } else {
          setErrorMsg(`minmum ${minLength} char required`);
        }
        onChange && onChange(e);
      }
      if (exact) {
        if (value.length <= exact) {
          const check = checkExactLength(value, Number(exact));
          if (check.msg) {
            setErrorMsg(check.msg);
            onChange && onChange(e);
          } else {
            setErrorMsg(null);
          }
          setValue(value);
        }
      } else if (maxLength) {
        if (value.length <= maxLength) {
          setValue(value);
          onChange && onChange(e);
        }
      } else {
        setValue(value);
      }
    } else {
      setErrorMsg(null);
      setValue(value);
    }
  };

  useEffect(() => {
    setValue(Number(value) || Number(defaultValue));
  }, [value, defaultValue]);

  return (
    <Input
      type="number"
      error={errorMsg}
      maxLength={maxLength}
      minLength={minLength}
      {...attributes}
      value={nvalue}
      required={required}
      onChange={handleOnChange}
    />
  );
};

NumberField.propTypes = {
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
  exact: PropTypes.number,
  required: PropTypes.bool,
  value: PropTypes.number,
  minLength: PropTypes.number,
  defaultValue: PropTypes.number
};

export default NumberField;
