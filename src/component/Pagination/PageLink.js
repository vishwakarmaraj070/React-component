import React, { useState } from "react";
import classNames from "classnames";
import Waves from "../Waves";

const PageLink = props => {
  const [cursorPos, setCursorPos] = useState({});

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  const { children, className, ...attributes } = props;

  const classes = classNames("page-link Ripple-parent", className);

  return (
    <button
      {...attributes}
      className={classes}
      onMouseUp={handleClick}
      type="button"
      onTouchStart={handleClick}
    >
      {children}
      <Waves cursorPos={cursorPos} />
    </button>
  );
};

export default PageLink;
