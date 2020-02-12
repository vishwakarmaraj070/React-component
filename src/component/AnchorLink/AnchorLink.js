import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function AnchorLink(props) {
  const { children, className, ...attributes } = props;

  const styles = classnames("anchore-link", className);

  return (
    <p className={styles} {...attributes}>
      {children}
    </p>
  );
}

// type checking
AnchorLink.propTypes = {};
