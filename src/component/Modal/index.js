import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Modal = props => {
  // distructure props
  const {
    noBackDrop,
    open,
    size,
    className,
    position,
    style,
    ...attributes
  } = props;

  const modalStyle = classnames("modal", { open: open }, className);
  const modalDialogStyle = classnames("modal-dialog", {
    [`modal-${position}`]: position,
    [`modal-${size}`]: size
  });
  const modalContentStyle = classnames("modal-content");
  const backdropStyle = classnames("backdrop");

  return (
    <div className={modalStyle} {...attributes}>
      {!noBackDrop && <div className={backdropStyle}></div>}
      <div {...(style && { style })} className={modalDialogStyle}>
        <div className={modalContentStyle}>{props.children}</div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  position: "center"
};

Modal.propTypes = {
  noBackDrop: PropTypes.bool,
  open: PropTypes.bool,
  size: PropTypes.string,
  position: PropTypes.string,
  style: PropTypes.object
};

export default Modal;
