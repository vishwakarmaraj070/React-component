import React from "react";
import PropTypes from "prop-types";

const Column = ({ children, heading, rowspan, colspan, className }) => {
  return (
    <td
      className={`${heading ? "th" : "td"} ${className}`}
      rowSpan={rowspan}
      colSpan={colspan}
    >
      {children}
    </td>
  );
};

Column.defaultProps = {
  rowspan: null,
  colspan: null,
  heading: false,
  className: ""
};

Column.propTypes = {
  rowspan: PropTypes.number,
  colspan: PropTypes.number,
  heading: PropTypes.bool
};

export default Column;
