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
    small,
    indeterminate,
    checkboxClass,
    labelClass,
    color,
    ...attributes
  } = props;

  const checkboxClasses = classnames(
    `checkbox checkbox-${color}`,
    {
      [`left-label`]: labelLeft,
      indeterminate,
      small: small
    },
    checkboxClass
  );
  const styles = classnames(className);
  const labelStyle = classnames(
    labelClass,
    "Small-Body-Copy-RegularSmall-body-copy-Regular-Default ckeckbox-label",
    {
      small: small
    }
  );

  //
  const CheckboxCom = () => (
    <input
      id={id}
      name={name}
      type="checkbox"
      indeterminate={indeterminate}
      className={checkboxClasses}
      {...attributes}
    />
  );

  return (
    <span className={styles}>
      {labelLeft ? (
        <label className={labelStyle} htmlFor={id}>
          {label}
          <CheckboxCom />
        </label>
      ) : (
        <label className={labelStyle} htmlFor={id}>
          <CheckboxCom />
          {label}
        </label>
      )}
    </span>
  );
};

Checkbox.defaultProps = {
  color: "primary"
};

Checkbox.propTypes = {
  color: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  labelLeft: PropTypes.bool,
  labelClass: PropTypes.string,
  onClick: PropTypes.func,
  indeterminate: PropTypes.bool,
  checkboxClass: PropTypes.string,
  small: PropTypes.bool
};

export default Checkbox;
