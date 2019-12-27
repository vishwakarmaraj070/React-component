import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import { checkMobile } from "../../Validation";

const MobileNumber = props => {
  const { onChange, ...attributes } = props;
  const [mobile, setMobile] = useState({
    value: null,
    error: null
  });
  const country = "indiaa";
  // validation here
  const handleChange = e => {
    onChange && onChange(e);
    if (country === "india") {
      const check = checkMobile(e.target.value);
      setMobile({ ...mobile, error: check.msg });
    } else {
      const check = checkMobile(e.target.value, true);
      setMobile({ ...mobile, error: check.msg });
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
        defaultValue={country === "india" ? "+91" : "C-code"}
        style={{ width: "23%" }}
      />
      <Input
        type="tell"
        placeholder="Mobile no"
        maxLength={country === "india" ? 10 : 25}
        error={mobile.error}
        style={{ width: "74%" }}
        onChange={handleChange}
        {...attributes}
      />
    </div>
  );
};

MobileNumber.propTypes = {
  onChange: PropTypes.func
};

export default MobileNumber;
