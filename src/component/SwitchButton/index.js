import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const SwitchButton = props => {
  const { className, color, onChange, ...attributes } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = e => {
    onChange && onChange(e);
    setIsChecked(e.target.checked);
  };

  const switchStyle = classnames(
    `r-switch-btn switch-btn-${color}`,
    { checked: isChecked },
    className
  );
  return (
    <input
      className={switchStyle}
      type="checkbox"
      {...attributes}
      onChange={handleChange}
    />
  );
};

SwitchButton.defaultProps = {
  color: "primary"
};

SwitchButton.propTypes = {
  color: PropTypes.string
};

export default SwitchButton;
