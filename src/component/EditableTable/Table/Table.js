import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "../Table.css";

const Table = props => {
  const {
    bordered,
    borderless,
    children,
    fixed,
    hover,
    maxHeight,
    responsive,
    responsiveSm,
    responsiveMd,
    responsiveLg,
    responsiveXl,
    scrollY,
    scrollX,
    small,
    striped,
    className,
    ...attributes
  } = props;

  const tableClasses = classNames(
    "table",
    {
      "table-bordered": bordered,
      "table-borderless": borderless,
      "table-fixed": fixed,
      "table-hover": hover,
      "table-sm": small,
      "table-striped": striped
    },
    className
  );

  const wrapperClasses = classNames("table-wrapper r-table", {
    "table-responsive": responsive,
    "table-responsive-sm": responsiveSm,
    "table-responsive-md": responsiveMd,
    "table-responsive-lg": responsiveLg,
    "table-responsive-xl": responsiveXl,
    "table-scroll-y": scrollY || maxHeight,
    "table-scroll-x": scrollX
  });

  const wrapperStyles = {
    maxHeight: maxHeight ? `${maxHeight}` : null
  };

  return (
    <div data-test="table" className={wrapperClasses} style={wrapperStyles}>
      <table {...attributes} className={tableClasses}>
        {children}
      </table>
    </div>
  );
};

Table.propTypes = {
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  children: PropTypes.node,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  maxHeight: PropTypes.string,
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  scrollY: PropTypes.bool,
  scrollX: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool,
  className: PropTypes.string
};

export default Table;
