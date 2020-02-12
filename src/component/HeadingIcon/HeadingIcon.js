import React from "react";
import PropTypes from "prop-types";

const HeadingIcon = props => {
  //   props destructuring
  const { icon, title } = props;

  return (
    <div
      className={`flex align-items-center p-2 text-capitalize Headingicon_box`}
    >
      <div className="text-secondary mr-3  Small-Body-CopySmall-body-Primary">
        {icon}
      </div>
      <h1 className="Small-Body-CopySmall-body-Primary">{title}</h1>
    </div>
  );
};

HeadingIcon.defaultProps = {
  icon: null,
  title: null
};

HeadingIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default HeadingIcon;
