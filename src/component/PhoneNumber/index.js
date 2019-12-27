import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import { checkSTDCode, checkPhoneNumber } from "../../Validation";

const PhoneNumber = props => {
  const { onChange, ...attributes } = props;
  // state here
  const [state, setState] = useState({
    std: {
      value: "",
      error: null
    },
    phone: {
      value: "",
      error: null
    }
  });

  const [maxLength, setMaxLength] = useState(8);

  // validation here
  const handleChange = (e, name = "") => {
    onChange && onChange(`${state.std.value}-${state.phone.value}`);
    if (name === "std") {
      const check = checkSTDCode(e.target.value);
      const checkPhone = checkPhoneNumber(state.phone.value, e.target.value);
      setMaxLength(10 - Number(e.target.value.length));
      setState({
        ...state,
        std: {
          value: e.target.value,
          error: check.msg
        },
        phone: {
          value: state.phone.value,
          error: state.phone.value && checkPhone.msg
        }
      });
    } else {
      const check = checkPhoneNumber(e.target.value, state.std.value);
      const checkStd = checkSTDCode(state.std.value);
      setState({
        ...state,
        phone: {
          value: e.target.value,
          error: check.msg
        },
        std: {
          value: state.std.value,
          error: checkStd.msg
        }
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
      <Input
        {...attributes}
        type="tel"
        error={state.std.error}
        maxLength={5}
        placeholder="std-code"
        style={{ width: "23%" }}
        onChange={e => handleChange(e, "std")}
      />
      <Input
        type="tel"
        placeholder="phone"
        maxLength={maxLength}
        error={state.phone.error}
        style={{ width: "74%" }}
        onChange={e => handleChange(e, "phone")}
        {...attributes}
      />
    </div>
  );
};

PhoneNumber.propTypes = {
  onChange: PropTypes.func
};

export default PhoneNumber;
