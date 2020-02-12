import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Waves from "../Waves";

const Button = ({
  block,
  circle,
  className,
  color,
  disabled,
  download,
  flat,
  floating,
  innerRef,
  outline,
  size,
  type,
  iconBtn,
  rounded,
  children,
  gradient,
  pulse,
  ...attributes
}) => {
  const [cursorPos, setCursorPos] = useState({});

  const handleClick = e => {
    e.stopPropagation();
    // Waves - Get Cursor Position
    if (pulse) {
      const el = e.target;
      el.classList.add("pulse-open");
      setTimeout(() => {
        el.classList.remove("pulse-open");
      }, 310);
    } else {
      let cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(cursorPos);
    }
  };

  const btnClasses = classNames(
    outline
      ? `btn-outline-${color} pulse-${color}`
      : gradient
      ? `${gradient}-gradient`
      : `btn-${color}`,
    "btn",
    iconBtn && "icon-btn",
    pulse ? `pulse ` : "Ripple-parent",
    rounded && "btn-rounded",
    floating && "btn-floating",
    floating && size ? `floating-${size}` : "",
    flat && `btn-flat`,
    className,
    {
      "btn-circle": circle,
      "btn-block": block,
      [`btn-${size}`]: size,
      disabled
    }
  );

  return (
    <button
      data-test="button"
      type={type}
      className={btnClasses}
      ref={innerRef}
      onMouseUp={handleClick}
      onTouchStart={handleClick}
      {...attributes}
      download={download}
      disabled={disabled}
    >
      {children}
      {!disabled && !pulse && (
        <Waves
          cursorPos={cursorPos}
          outline={outline}
          color={color}
          flat={flat || rounded}
        />
      )}
    </button>
  );
};

Button.defaultProps = {
  color: "primary",
  type: "button"
};

Button.propTypes = {
  block: PropTypes.bool,
  circle: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  download: PropTypes.string,
  flat: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  social: PropTypes.string,
  type: PropTypes.string,
  outline: PropTypes.bool,
  gradient: PropTypes.string,
  pulse: PropTypes.bool,
  iconBtn: PropTypes.bool
};

export default Button;
