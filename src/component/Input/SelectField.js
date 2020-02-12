import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const SelectField = props => {
  // props
  const {
    className,
    hint,
    error,
    size,
    errorMsg,
    value,
    hintRight,
    defaultValue,
    defaultText,  
    label,
    errorRight,
    children,
    ...attributes
  } = props;
  // classes
  const selectStyle = classnames(
    "r-select r-input-box",
    {
      "input-msg": hint || error || errorMsg,
      [`select-${size}`]: size
    },
    className
  );
  // label input
  const labelStyle = classnames("label-style");
  // style hint
  const hintStyles = classnames("r-hint", {
    right: hintRight
  });
  // style error
  const errorStyles = classnames("r-error", {
    right: errorRight
  });

  return (
    <div
      className={selectStyle}
      {...(errorMsg || error ? { error: "true" } : {})}
    >
      {/* label */}
      {label && <label className={labelStyle}>{label}</label>}
      {/* select */}
      <select defaultValue={defaultValue || value} {...attributes}>
        <option disabled selected value="-1">
          {defaultText}
        </option>
        {children}
      </select>

      {/* hint here */}
      {hint && !error && !errorMsg && (
        <span className={hintStyles}>{hint}</span>
      )}
      {/* error here */}
      {errorMsg ? (
        <span className={errorStyles}>{errorMsg}</span>
      ) : error ? (
        <span className={errorStyles}>{error}</span>
      ) : (
        ""
      )}
    </div>
  );
};

SelectField.defaultProps = {
  defaultText: "select"
};

SelectField.propTypes = {
  size: PropTypes.oneOf(["sm", "lg"]),
  hint: PropTypes.string,
  error: PropTypes.string,
  hintRight: PropTypes.bool,
  errorRight: PropTypes.bool,
  label: PropTypes.string,
  borderStyle: PropTypes.oneOf([`left`, "center", "right", "none"])
};

export default SelectField;
