import React, { Children } from "react";
import PropTypes from "prop-types";

const Grid = props => {
  // props destructuring
  const {
    xs,
    sm,
    md,
    lg,
    xl,
    container,
    item,
    children,
    xsOffset,
    smOffset,
    mdOffset,
    lgOffset,
    xlOffset,
    className,
    noGutters
  } = props;

  // gutters
  const Gutters = `no-gutters`;

  // bread points
  const xsBreakPoint = xs ? `col-${xs}` : "";
  const smBreakPoint = sm ? `col-sm-${sm}` : "";
  const mdBreakPoint = md ? `col-md-${md}` : "";
  const lgBreakPoint = lg ? `col-lg-${lg}` : "";
  const xlBreakPoint = xl ? `col-xl-${xl}` : "";
  const BreakPoint = `${xsBreakPoint} ${smBreakPoint} ${mdBreakPoint} ${lgBreakPoint} ${xlBreakPoint}`.trim();

  // offset points
  const xsOffsetPoint = xsOffset ? `offset-xs-${xsOffset}` : "";
  const smOffsetPoint = smOffset ? `offset-sm-${smOffset}` : "";
  const mdOffsetPoint = mdOffset ? `offset-md-${mdOffset}` : "";
  const lgOffsetPoint = lgOffset ? `offset-lg-${lgOffset}` : "";
  const xlOffsetPoint = xlOffset ? `offset-xl-${xlOffset}` : "";
  const offsetPoint = `${xsOffsetPoint} ${smOffsetPoint} ${mdOffsetPoint} ${lgOffsetPoint} ${xlOffsetPoint}`.trim();

  const classname = `${(container && `row ${Gutters}`) ||
    (item && BreakPoint)} ${offsetPoint} ${className}`;

  return <div className={classname.trim()}>{children}</div>;
};

// default props
Grid.defaultProps = {
  xs: "",
  sm: "",
  md: "",
  lg: "",
  xl: "",
  xsOffset: "",
  smOffset: "",
  mdOffset: "",
  lgOffset: "",
  xlOffset: "",
  className: "",
  noGutters: false
};

// props type check
Grid.propTypes = {
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto", ""]),
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto", ""]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto", ""]),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto", ""]),
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto", ""]),
  xsOffset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ""]),
  smOffset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ""]),
  mdOffset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ""]),
  lgOffset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ""]),
  xlOffset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ""]),
  className: PropTypes.string,
  container: PropTypes.bool,
  item: PropTypes.bool
};

export default Grid;
