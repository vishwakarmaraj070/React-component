import React from "react";
import classnames from "classnames";

const Tab = props => {
  const { className, children, ...attributes } = props;

  const tabStyles = classnames("tab", className);

  return (
    <div className={tabStyles} {...attributes}>
      {children}
    </div>
  );
};

export default Tab;
