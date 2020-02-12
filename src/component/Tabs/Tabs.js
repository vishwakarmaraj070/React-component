import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Tabs = props => {
  // props
  const { className, color, children, ...attributes } = props;

  const tabsStyles = classnames("tabs", { [`tab-${color}`]: color }, className);

  return (
    <div className={tabsStyles} {...attributes}>
      {children}
    </div>
  );
};

Tabs.defaultProps = {
  color: "primary"
};

Tabs.propTypes = {
  color: PropTypes.string
};

export default Tabs;
