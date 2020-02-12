import React from "react";
import PropTypes from "prop-types";

export default function TextArea(props) {
  //props destructuring
  const {
    placeholder,
    name,
    size,
    className,
    onChange,
    value,
    readOnly,
    autoFocus,
    row
  } = props;

  return (
    <textarea
      {...(autoFocus ? { autoFocus: true } : {})}
      name={name ? name : placeholder}
      defaultValue={value}
      readOnly={readOnly}
      rows={row}
      className={
        size ? `input-${size} mb-2 ${className}` : `input mb-2 ${className}`
      }
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

// default props
TextArea.defaultProps = {
  className: "",
  placeholder: "",
  name: null,
  size: null,
  value: "",
  autoFocus: false,
  onChange: function() {
    console.log("function required");
  },
  readOnly: false,
  row: 3
};

// type checking
TextArea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "lg"]),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  autoFocus: PropTypes.bool,
  readOnly: PropTypes.bool,
  row: PropTypes.number,
  className: PropTypes.string
};
