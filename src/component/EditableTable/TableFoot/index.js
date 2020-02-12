import React from "react";
import PropTypes from "prop-types";
import TableFoot from "./TableFoot";

const index = props => {
  return (
    <>
      <TableFoot {...props} />
    </>
  );
};

index.propTypes = {};

export default index;
