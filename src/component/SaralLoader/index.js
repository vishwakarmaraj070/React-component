import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const SaralLoader = props => {
  // props
  const { isOpen, className, ...attributes } = props;

  // style
  const pageLoaderStyle = classnames(
    "r-pageLoader",
    { open: !isOpen, close: isOpen },
    className
  );
  return (
    <div className={pageLoaderStyle} {...attributes}>
      <div id="Preloader8">
        <div className="box face1">
          <div className="circle"></div>
        </div>
        <div className="box face2">
          <div className="circle"></div>
        </div>
      </div>
      <div id="Text16">
        <h1>
          <span>S</span>
          <span>A</span>
          <span>R</span>
          <span>A</span>
          <span>L</span>
        </h1>
      </div>
    </div>
  );
};

SaralLoader.defultProps = {};

SaralLoader.propTypes = {
  isOpen: PropTypes.bool
};

export default SaralLoader;
