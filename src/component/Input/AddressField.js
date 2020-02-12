import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import TextArea from "./TextArea";
import Input from "./Input";
import PINCodeField from "./PINCodeField";
import StateField from "./StateField";

const AddressField = props => {
  const {
    className,
    placeRequired,
    stateRequired,
    stateCode,
    noPinCode,
    pinRequired,
    ...attributes
  } = props;
  const addressStyle = classnames("r-address", className);
  return (
    <div className={addressStyle}>
      <TextArea
        resize="none"
        placeholder="Address here"
        size="sm"
        rows={5}
        {...attributes}
      />
      <Input
        placeholder="Place"
        required={placeRequired}
        minLength={3}
        size="sm"
      />
      {!noPinCode && (
        <PINCodeField required={pinRequired} placeholder="PIN" size="sm" />
      )}

      <StateField size="sm" stateCode={stateCode} required={stateRequired} />
    </div>
  );
};
AddressField.defaultProps = {};

AddressField.propTypes = {
  placeRequired: PropTypes.bool,
  pinRequired: PropTypes.bool,
  stateRequired: PropTypes.bool,
  stateCode: PropTypes.string,
  noPinCode: PropTypes.bool
};

export default AddressField;
