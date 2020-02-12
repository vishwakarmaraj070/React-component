import React from "react";
import PropTypes from "prop-types";

const Row = ({ children, heading }) => {
  return <tr className={`tr`}>{children}</tr>;
};

Row.defaultProps = {};

Row.propTypes = {};

export default Row;
