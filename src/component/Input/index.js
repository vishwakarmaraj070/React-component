import React, { useState } from "react";
import PropTypes, { node, string } from "prop-types";
import classnames from "classnames";
import { checkNoSpecialChar, checkExactLength } from "../../Validation";

const Input = props => {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleBlur = e => {
    onBlur && onBlur(e);
    if (e.target.value.trim().length) {
      setIsEmpty(true);
      console.log(isEmpty);
    } else {
      setIsEmpty(false);
    }
  };

  const {
    type,
    id,
    size,
    label,
    hint,
    noBg,
    pattern,
    patternMsg,
    placeholder,
    onBlur,
    legendInput,
    hintRight,
    exact,
    errorRight,
    error,
    onKeyUp,
    noSpecialChar,
    borderStyle,
    maxLength,
    inputClasses,
    labelClasses,
    style,
    className,
    ...attributes
  } = props;

  const [errorMsg, setErrorMsg] = useState();

  // classes
  // style box
  const styles = classnames(
    "r-input-box",
    {
      "legend-input": legendInput,
      "input-msg": hint || error || errorMsg
    },
    className
  );

  // style input
  const inputStyles = classnames(
    "r-input",
    {
      "no-bg": noBg,
      [`input-${size}`]: size,
      "input-label": label && !placeholder
    },
    inputClasses
  );

  // style label
  const labelStyles = classnames(
    "r-label",
    { "label-fixed": isEmpty },
    labelClasses
  );

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
    {
      "fixed-border": isEmpty,
      "r-input-border": !legendInput,
      "legend-border": legendInput
    },
    borderStyle
  );

  // function onkeyup
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);

    // check no special char
    if (noSpecialChar) {
      const check = checkNoSpecialChar(e.target.value);
      if (check.msg) {
        setErrorMsg(check.msg);
      } else {
        setErrorMsg(null);
      }
    }

    // check exact
    if (exact) {
      const check = checkExactLength(e.target.value, exact);
      if (check.msg) {
        setErrorMsg(check.msg);
      } else {
        setErrorMsg(null);
      }
    }

    // check pattern
    if (pattern) {
      const regExp = new RegExp(pattern, "g");
      const check = (function() {
        if (regExp.test(e.target.value)) {
          return {
            error: false,
            msg: null
          };
        } else {
          return {
            error: true,
            msg: patternMsg ? patternMsg : `allow this pattern ${pattern} only`
          };
        }
      })();
      setErrorMsg(check.msg);
    }
  };

  return (
    <div style={style} className={styles}>
      <input
        type={type}
        id={id}
        {...(errorMsg || error ? { error: "true" } : {})}
        className={inputStyles}
        placeholder={placeholder}
        onBlur={handleBlur}
        maxLength={maxLength || exact}
        onKeyUp={handleKeyUp}
        {...(pattern && { pattern })}
        {...attributes}
      />
      {borderStyle !== "none" && !legendInput && (
        <div className={borderStyles}></div>
      )}
      {label && !placeholder && (
        <label htmlFor={id} className={labelStyles}>
          {label}
        </label>
      )}
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
  borderStyle: "center"
};

Input.propTypes = {
  borderStyle: PropTypes.oneOf([`left`, "center", "right", "none"]),
  type: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  label: PropTypes.oneOfType([string, node]),
  hint: PropTypes.string,
  noBg: PropTypes.bool,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  legendInput: PropTypes.bool,
  error: PropTypes.string,
  inputClasses: PropTypes.string,
  labelClasses: PropTypes.string,
  hintRight: PropTypes.bool,
  errorRight: PropTypes.bool,
  noSpecialChar: PropTypes.bool,
  onKeyUp: PropTypes.func,
  exact: PropTypes.number,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  patternMsg: PropTypes.string
};

export default Input;
