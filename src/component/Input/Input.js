import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { checkExactLength } from "../../Validation";

const Input = props => {
  const {
    type,
    id,
    size,
    hint,
    placeholder,
    onBlur,
    hintRight,
    exact,
    label,
    errorRight,
    error,
    required,
    onKeyUp,
    borderStyle,
    maxLength,
    minLength,
    inputClasses,
    style,
    className,
    ...attributes
  } = props;

  const [isEmpty, setIsEmpty] = useState(false);

  const [errorMsg, setErrorMsg] = useState();

  // handle blur
  const handleBlur = e => {
    onBlur && onBlur(e);
    if (required) {
      onBlur && onBlur(e);
      if (required) {
        if (e.target.value.trim().length) {
          setIsEmpty(true);
          setErrorMsg(null);
        } else {
          setIsEmpty(false);
          setErrorMsg(`Field required`);
        }
      }
    }
  };

  // function onkeyup
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    handleBlur(e);
    const value = e.target.value;
    // check exact
    if (value.length) {
      if (minLength) {
        if (value.length >= minLength) {
          setErrorMsg(null);
        } else {
          setErrorMsg(error ? null : `minmum ${minLength} char required`);
        }
      }
      if (exact) {
        const check = checkExactLength(value, exact);
        if (check.msg) {
          setErrorMsg(error ? null : check.msg);
        } else {
          setErrorMsg(null);
        }
      }
    } else {
      setErrorMsg(null);
    }
  };

  // classes
  // style box
  const styles = classnames(
    "r-input-box",
    {
      "input-msg": hint || error || errorMsg
    },
    className
  );

  // style input
  const inputStyles = classnames(
    "r-input",
    {
      [`input-${size}`]: size
    },
    inputClasses
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

  // style border
  const borderStyles = classnames(
    "r-input-border",
    {
      "fixed-border": isEmpty
    },
    borderStyle
  );

  return (
    <div style={style} className={styles}>
      {label && (
        <label className={labelStyle} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        {...(errorMsg || error ? { error: "true" } : {})}
        className={inputStyles}
        placeholder={placeholder}
        onBlur={handleBlur}
        required={required}
        minLength={minLength}
        maxLength={maxLength || exact}
        onKeyUp={handleKeyUp}
        {...attributes}
      />
      {borderStyle !== "none" && <div className={borderStyles}></div>}

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

Input.defaultProps = {
  type: "text",
  borderStyle: "none"
};

Input.propTypes = {
  borderStyle: PropTypes.oneOf([`left`, "center", "right", "none"]),
  type: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  legendInput: PropTypes.bool,
  error: PropTypes.string,
  inputClasses: PropTypes.string,
  hintRight: PropTypes.bool,
  errorRight: PropTypes.bool,
  onKeyUp: PropTypes.func,
  exact: PropTypes.number,
  required: PropTypes.bool,
  label: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number
};

export default Input;
