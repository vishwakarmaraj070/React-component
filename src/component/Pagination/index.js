import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Pagination = props => {
  const { children, circle, className, color, ...attributes } = props;

  const classes = classNames(
    `pg-${color}`,
    {
      "pagination-circle": circle
    },
    "pagination",
    className
  );

  return (
    <ul {...attributes} className={classes}>
      {children}
    </ul>
  );
};

Pagination.propTypes = {
  circle: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string
};

Pagination.defaultProps = {
  circle: false,
  color: "primary"
};

export default Pagination;
