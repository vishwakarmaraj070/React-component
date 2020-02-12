import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Progress = ({
  children,
  className,
  color,
  height,
  max,
  min,
  preloader,
  wrapperStyle,
  value,
  ...attributes
}) => {
  const percent = ((value - min) / (max - min)) * 100;

  const progressClasses = classNames(
    "progress",
    { [`progress-${color}`]: color },
    className
  );

  const progressBarClasses = classNames("progress-bar");

  const computedHeight = height ? height : children && "1rem";

  const computedWrapperStyle = { ...wrapperStyle, height: computedHeight };

  return (
    <div
      data-test="progress"
      {...attributes}
      className={progressClasses}
      style={computedWrapperStyle}
    >
      <div
        className={progressBarClasses}
        style={{ width: `${percent}%`, height: computedHeight }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
      >
        {children}
      </div>
    </div>
  );
};

Progress.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  wrapperStyle: PropTypes.object,
  value: PropTypes.number
};

Progress.defaultProps = {
  color: "secondary",
  height: "",
  max: 100,
  min: 0,
  wrapperStyle: {},
  value: 0
};

export default Progress;
