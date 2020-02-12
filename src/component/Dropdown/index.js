import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Waves from "../Waves";

const Dropdown = props => {
  const { menu, color, className, children, ...attributes } = props;

  const [cursorPos, setCursorPos] = useState({});
  const [show, setShow] = useState(false);

  // function here
  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
    setShow(!show);
  };

  // classes here
  const dropdownStyle = classnames(
    "dropdown",
    {
      [`dropdown-${color}`]: color,
      show: show
    },
    className
  );
  const dropdownMenuStyle = classnames("dropdown-menu Ripple-parent caret", {
    "caret-up": show
  });
  const dropdownItemContainerStyle = classnames("dropdown-item-container");

  return (
    <div className={dropdownStyle} {...attributes}>
      <button
        className={dropdownMenuStyle}
        onMouseUp={handleClick}
        type="button"
        onTouchStart={handleClick}
      >
        {menu}
        <Waves cursorPos={cursorPos} color={color} />
      </button>
      <ul className={dropdownItemContainerStyle} onClick={handleClick}>
        {children}
      </ul>
    </div>
  );
};

Dropdown.defaultProps = {
  color: "primary"
};

Dropdown.propTypes = {
  menu: PropTypes.string,
  color: PropTypes.string
};

export default Dropdown;
