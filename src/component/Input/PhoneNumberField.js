import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

// check std anf phone
const checkSTDCode = value => {
  if (!isNaN(value)) {
    const pattern = new RegExp(`^[1-9][0-9]{1,4}$`);
    if (pattern.test(value)) {
      return {
        error: false,
        msg: null
      };
    } else {
      return {
        error: true,
        msg: "STD code should start with 1-to-9 and min 2 and max 5 digit"
      };
    }
  } else {
    return {
      error: true,
      msg: "fild contain only digit"
    };
  }
};

//

const checkPhoneNumber = (value, std) => {
  if (!isNaN(value)) {
    const pattern = new RegExp(
      `^[0-9]{${
        String(std).length >= 2 ? 10 - Number(String(std).length) : "8"
      }}$`
    );
    if (pattern.test(value)) {
      return {
        error: false,
        msg: null
      };
    } else {
      return {
        error: true,
        msg: `number should contain max ${
          String(std).length >= 2 ? 10 - Number(String(std).length) : "8"
        } digit`
      };
    }
  } else {
    return {
      error: true,
      msg: "fild contain only digit"
    };
  }
};

const PhoneNumber = props => {
  const { className, required, onChange, ...attributes } = props;
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
    const value = e.target.value;
    if (value.length) {
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
    } else {
      setState({
        ...state,
        phone: {
          value: e.target.value,
          error: null
        },
        std: {
          value: state.std.value,
          error: null
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
      {...(className && className)}
    >
      <Input
        {...attributes}
        type="tel"
        error={state.std.error}
        maxLength={5}
        placeholder="std-code"
        style={{ width: "100px" }}
        required={required}
        onChange={e => handleChange(e, "std")}
      />
      <Input
        type="tel"
        placeholder="phone"
        maxLength={maxLength}
        error={state.phone.error}
        style={{ width: "calc(100% - 120px)" }}
        onChange={e => handleChange(e, "phone")}
        required={required}
        {...attributes}
      />
    </div>
  );
};

PhoneNumber.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.bool
};

export default PhoneNumber;
