import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import classnames from "classnames";
import Button from "../Button";
import { ReactComponent as SearchImg } from "./search.svg";

const SearchField = props => {
  // props
  const { onClick, className, ...attributes } = props;

  // function here
  const handleClick = e => {
    onClick && onClick();
  };

  // classes here
  const searchStyles = classnames("search", className);
  return (
    <div className={searchStyles}>
      <Input type="search" {...attributes} />
      <Button flat iconBtn onClick={handleClick} size="sm">
        <SearchImg />
      </Button>
    </div>
  );
};

SearchField.propTypes = {
  onClick: PropTypes.func
};

export default SearchField;
