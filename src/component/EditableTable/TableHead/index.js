import React from "react";
import PropTypes from "prop-types";
import TableHead from "./TableHead";

const index = props => {
  return (
    <>
      <TableHead {...props} />
    </>
  );
};

index.propTypes = {};

export default index;
