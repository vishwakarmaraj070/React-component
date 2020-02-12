import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Waves from "../Waves";

const Badge = props => {
  const [cursorPos, setCursorPos] = useState({});

  // distrucure badge
  const {
    children,
    onMouseUp,
    className,
    contentEditable,
    onTouchStart,
    color,
    ...attributes
  } = props;

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    onMouseUp && onMouseUp(e);
    onTouchStart && onTouchStart(e);
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  // clasess
  const badgeStyle = classnames(
    "badge",
    "Ripple-parent",
    {
      [`badge-${color}`]: color,
      contentEditable
    },
    className
  );

  return (
    <button
      className={badgeStyle}
      onMouseUp={handleClick}
      type="button"
      contentEditable={contentEditable}
      onTouchStart={handleClick}
      {...attributes}
    >
      {children}
      {!contentEditable && <Waves cursorPos={cursorPos} color={color} />}
    </button>
  );
};

Badge.defaultProps = {
  color: "primary"
};

Badge.propTypes = {
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
  color: PropTypes.string,
  contentEditable: PropTypes.bool
};

export default Badge;
