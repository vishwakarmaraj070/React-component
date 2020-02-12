import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Accordian = props => {
  // distructure
  const { header, color, children, className, ...attributes } = props;
  const [open, setOpen] = useState(false);
  const [styles, setStyles] = useState({});

  const handleClick = e => {
    e.preventDefault();
    const bodyHeight =
      e.target.parentNode.parentNode.children[1].scrollHeight + 25;
    setOpen(!open);
    if (!open) {
      setStyles({ height: bodyHeight });
    } else {
      setStyles({ height: "0" });
    }
  };

  // classes
  const accorianStyle = classnames(
    "accordian",
    "accordian-container",
    {
      show: open,
      [`accordian-${color}`]: color !== "no-color"
    },
    className
  );
  const accorianHeaderStyle = classnames("accordian-header");

  const accorianBodyStyle = classnames("accordian-body");
  const accorianHeaderBackdropStyle = classnames("accordian-header-backdrop");

  return (
    <div className={accorianStyle} {...attributes}>
      <div className={accorianHeaderStyle}>
        <div
          className={accorianHeaderBackdropStyle}
          onClick={handleClick}
        ></div>
        {header}
      </div>
      <div className={accorianBodyStyle} style={styles}>
        {children}
      </div>
    </div>
  );
};

Accordian.defaultProps = {
  header: "Header here",
  color: "primary"
};

Accordian.propTypes = {
  header: PropTypes.node,
  color: PropTypes.string
};

export default Accordian;
