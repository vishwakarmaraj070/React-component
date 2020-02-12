import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Radio = props => {
  const {
    label,
    name,
    labelLeft,
    radioClass,
    small,
    labelClass,
    className,
    color,
    ...attributes
  } = props;

  //
  const radioClasses = classnames(
    `radio radio-${color}`,
    {
      [`left-label`]: labelLeft,
      small: small
    },
    radioClass
  );

  const labelStyle = classnames(
    `Small-Body-Copy-RegularSmall-body-copy-Regular-Default radio-lable`,
    labelClass,
    {
      small: small
    }
  );

  //
  const RadioCom = () => (
    <input name={name} type="radio" className={radioClasses} {...attributes} />
  );

  return (
    <span className={className}>
      {labelLeft ? (
        <label className={labelStyle}>
          {label}
          <RadioCom />
        </label>
      ) : (
        <label className={labelStyle}>
          <RadioCom />
          {label}
        </label>
      )}
    </span>
  );
};

Radio.defaultProps = {
  color: "primary"
};

Radio.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  labelClass: PropTypes.string,
  labelLeft: PropTypes.bool,
  label: PropTypes.string,
  radioClass: PropTypes.string,
  small: PropTypes.bool
};

export default Radio;
