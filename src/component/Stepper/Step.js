import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import withActivePage from "./withActivePage";

const Step = props => {
  const stepRef = useRef();
  const { children, stepClass } = props;
  const [style, setStyle] = useState({});
  // classes
  const stepStyle = classnames("r-step", stepClass);

  useEffect(() => {
    try {
      setStyle({
        height: stepRef.current.scrollHeight + stepRef.current.scrollHeight / 4
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className={stepStyle} style={style}>
      <div className="step-box" ref={stepRef}>
        {children}
      </div>
    </div>
  );
};

Step.propTypes = {
  stepClass: PropTypes.string
};

export default withActivePage(Step);
