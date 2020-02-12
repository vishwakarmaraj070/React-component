import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { checkExactLength } from "../../Validation";

const TextArea = props => {
  const {
    size,
    hint,
    placeholder,
    onBlur,
    rows,
    hintRight,
    exact,
    errorRight,
    error,
    resize,
    required,
    onKeyUp,
    borderStyle,
    maxLength,
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
          setErrorMsg(`field required`);
        }
      }
    }
  };

  // function onkeyup
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    handleBlur(e);
    // check exact
    if (e.target.value.length) {
      if (exact) {
        const check = checkExactLength(e.target.value, exact);
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
      [`input-${size}`]: size,
      [`resize-${resize}`]: resize
    },
    inputClasses
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
    "r-input-border",
    {
      "fixed-border": isEmpty
    },
    borderStyle
  );

  return (
    <div style={style} className={styles}>
      <textarea
        {...(errorMsg || error ? { error: "true" } : {})}
        className={inputStyles}
        placeholder={placeholder}
        rows={rows}
        onBlur={handleBlur}
        required={required}
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

TextArea.defaultProps = {
  type: "text",
  rows: 4,
  resize: "verical",
  borderStyle: "none"
};

TextArea.propTypes = {
  borderStyle: PropTypes.oneOf([`left`, "center", "right", "none"]),
  size: PropTypes.oneOf(["sm", "lg"]),
  hint: PropTypes.string,
  noBg: PropTypes.bool,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  legendInput: PropTypes.bool,
  error: PropTypes.string,
  inputClasses: PropTypes.string,
  hintRight: PropTypes.bool,
  errorRight: PropTypes.bool,
  onKeyUp: PropTypes.func,
  exact: PropTypes.number,
  resize: PropTypes.oneOf(["both", "none", "vertical", "horizontal"]),
  required: PropTypes.bool,
  rows: PropTypes.number,
  maxLength: PropTypes.number
};

export default TextArea;
