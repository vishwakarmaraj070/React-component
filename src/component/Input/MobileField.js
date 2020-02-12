import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
// check mobile funtion
const checkMobile = (value, other = false) => {
  if (!isNaN(value)) {
    const pattern = new RegExp(
      `^[${other ? "1-9" : "7-9"}][0-9]{${other ? "9," : "9"}}$`
    );
    if (pattern.test(value)) {
      return {
        error: false,
        msg: null
      };
    } else {
      return {
        error: true,
        msg: `number should start with ${
          other ? "1-9 and min 9 and max..." : "7-to-9 and max 10 digit"
        }`
      };
    }
  } else {
    return {
      error: true,
      msg: "number contain only digit"
    };
  }
};

//
const MobileNumber = props => {
  const { onChange, required, country, className, code, ...attributes } = props;
  const [mobile, setMobile] = useState({
    value: null,
    error: null
  });
  // validation here
  const handleChange = e => {
    onChange && onChange(e);
    if (e.target.value.length) {
      if (country === "india") {
        const check = checkMobile(e.target.value);
        setMobile({ ...mobile, error: check.msg });
      } else {
        const check = checkMobile(e.target.value, true);
        setMobile({ ...mobile, error: check.msg });
      }
    } else {
      setMobile({ value: null, error: null });
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
        readOnly
        defaultValue={code}
        style={{ width: "70px" }}
      />
      <Input
        type="tel"
        placeholder="Mobile no"
        maxLength={country === "india" ? 10 : 25}
        error={mobile.error}
        style={{ width: "calc(100% - 90px)" }}
        required={required}
        onChange={handleChange}
        {...attributes}
      />
    </div>
  );
};

MobileNumber.defaultProps = {
  country: "india",
  code: "+91"
};

MobileNumber.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.bool,
  country: PropTypes.string,
  code: PropTypes.string
};

export default MobileNumber;
