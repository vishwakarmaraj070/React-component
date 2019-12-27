import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Radio = props => {
  const {
    label,
    name,
    labelLeft,
    labelClass,
    className,
    color,
    ...attributes
  } = props;
  const radioClasses = classnames(`radio radio-${color}`);

  return (
    <span className={className}>
      {label && labelLeft && (
        <label
          className={`Small-Body-CopySmall-body-Primary radio-lable ${labelClass}`}
        >
          {label}
        </label>
      )}
      <input
        name={name}
        type="radio"
        className={radioClasses}
        {...attributes}
      />
      {label && !labelLeft && (
        <label
          className={`Small-Body-CopySmall-body-Primary radio-lable ${labelClass}`}
        >
          {label}
        </label>
      )}
    </span>
  );
};

Radio.defaultProps = {
  color: "default"
};

Radio.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  labelClass: PropTypes.string,
  labelLeft: PropTypes.bool,
  label: PropTypes.string
};

export default Radio;
