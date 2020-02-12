import React from "react";
import PropTypes from "prop-types";

const Table = ({ children }) => {
  return (
    <table className={`table`}>
      <tbody className={`table`}>{children}</tbody>
    </table>
  );
};

Table.defaultProps = {};

Table.propTypes = {};

export default Table;
