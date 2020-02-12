import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const PageItem = props => {
  const { active, className, children, disabled, ...attributes } = props;

  const classes = classNames(
    {
      disabled: disabled,
      active: active
    },
    "page-item",
    className
  );

  return (
    <li {...attributes} className={classes}>
      {children}
    </li>
  );
};

PageItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool
};

PageItem.defaultProps = {
  active: false,
  disabled: false
};

export default PageItem;
