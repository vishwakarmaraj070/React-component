import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Checkbox = props => {
  const {
    id,
    label,
    name,
    labelLeft,
    className,
    disabled,
    labelClass,
    color,
    ...attributes
  } = props;
  const checkboxClasses = classnames(`checkbox checkbox-${color}`);
  const styles = classnames(className);

  return (
    <span className={styles}>
      {label && labelLeft && (
        <label
          className={`Small-Body-CopySmall-body-Primary ckeckbox-label ${labelClass}`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        name={name}
        type="checkbox"
        id={id}
        className={checkboxClasses}
        {...attributes}
      />
      {label && !labelLeft && (
        <label
          className={`Small-Body-CopySmall-body-Primary ckeckbox-label ${labelClass}`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </span>
  );
};

Checkbox.defaultProps = {
  color: "default"
};

Checkbox.propTypes = {
  color: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  labelLeft: PropTypes.bool,
  labelClass: PropTypes.string
};

export default Checkbox;
