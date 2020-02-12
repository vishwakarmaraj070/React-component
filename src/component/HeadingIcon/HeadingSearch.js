import React from "react";
import PropTypes from "prop-types";

const HeadingSearch = props => {
  //   props destructuring
  const { icon, title, onSearch, className, width } = props;
  return (
    <div
      className={`flex align-items-center justify-between p-2 text-capitalize Headingicon_box`}
    >
      <div className={`flex `}>
        <div className="text-secondary mr-3  Small-Body-CopySmall-body-Primary">
          {icon}
        </div>
        <h1 className="Small-Body-CopySmall-body-Primary">{title}</h1>
      </div>
      <div>
        <div
          className={`Headingicon_searchbar`}
          style={{ position: "relative", alignSelf: "flex-end" }}
        >
          <input
            placeholder="Search"
            onChange={onSearch}
            className={`Headingicon_search`}
            style={{ width: width }}
          />
          <span className={`Headingicon_search_icon`}>&#128269;</span>
        </div>
      </div>
    </div>
  );
};

HeadingSearch.defaultProps = {
  icon: null,
  title: null
};

HeadingSearch.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default HeadingSearch;
