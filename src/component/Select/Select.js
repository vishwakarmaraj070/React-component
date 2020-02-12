import React, { createRef } from "react";
import PropTypes from "prop-types";

// styles
import classnames from "classnames";

// components
import Checkbox from "../Checkbox";
import Radiobox from "../Radio";

const listRef = createRef();
class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      radioSeleted: "select client",
      width: "0px",
      dropdownSearch: "",
      selectall: false,
      multiSelect: {}
    };
  }

  componentDidMount() {
    this.setState({
      width: listRef.current.clientWidth
    });
  }

  // returning current selected value
  componentDidUpdate() {
    const state =
      this.props.multiselect === true
        ? this.state.multiSelect
        : this.state.radioSeleted;
    this.props.onSelect(state);
  }

  showDropdownMenu = () => {
    this.setState(
      {
        displayMenu: !this.state.displayMenu
      },
      () => {}
    );
  };

  // drop down animation handler
  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {});
  };

  onSearch = event => {
    const { value } = event.target;

    this.setState({
      dropdownSearch: value
    });
  };

  // select all checkbox
  handleSelectAll = event => {
    const { name } = event.target;
    const AllSelected = {};
    const Search = this.props.list.filter(item => {
      return item.toLowerCase().includes(this.state.dropdownSearch);
    });
    Search.map(
      item => (AllSelected[item] = !this.state.selectall ? true : false)
    );
    this.setState({
      selectall: !this.state.selectall,
      multiSelect: { ...AllSelected }
    });
  };

  // checkbox
  handleCheckBox = event => {
    const { name, value } = event.target;
    this.setState({
      multiSelect: {
        ...this.state.multiSelect,
        [name]: !this.state.multiSelect[name]
      }
    });
  };

  // radio
  handleRadio = value => {
    this.setState({
      radioSeleted: value
    });
  };

  render() {
    // state destructuring
    const {
      liAnimation,
      radioSeleted,
      displayMenu,
      width,
      dropdownSearch
    } = this.state;

    // props destructuring
    const { title, list, multiselect, color } = this.props;

    //animation class
    const animationClass = liAnimation ? "lianimation" : "";

    return (
      <div className={`select h-100`}>
        <div
          className={`select_button-${color} Small-Body-CopySmall-body-Copy-Bold-White h-100`}
          onClick={this.showDropdownMenu}
        >
          {multiselect ? title : radioSeleted}
        </div>
        <ul
          ref={listRef}
          className={`select_list-${color === "light" ? "primary" : color} ${
            displayMenu ? "select_animation" : ""
          }`}
          style={{ "--height": "200px" }}
        >
          <li
            className={`select_search_container ${
              !displayMenu ? "select_search_animation" : ""
            }`}
          >
            <div>
              <input
                placeholder="Search"
                onChange={this.onSearch}
                className={`select_search`}
                style={{ width: "100%" }}
              />
              <span className={`select_search_icon`}>&#128269;</span>
            </div>
          </li>
          {multiselect && (
            <li
              className={`select_option-${color} ${animationClass}`}
              style={{ height: 35 }}
            >
              <Checkbox
                labelLeft
                name={"selectall"}
                onChange={this.handleSelectAll}
                id={"selectall"}
                color={color === "light" ? "primary" : color}
                checked={this.state.selectall}
                className={`flex w-100 justify-between align-items-center pr-1`}
                label={`Select All`}
              />
            </li>
          )}
          {list
            .filter(item => {
              return item.toLowerCase().includes(dropdownSearch);
            })
            .map((item, index) => {
              return (
                <li
                  key={index}
                  className={`select_option-${color} ${animationClass}`}
                  value={item}
                >
                  {multiselect ? (
                    <Checkbox
                      labelLeft
                      name={item}
                      handleCheck={this.handleCheckBox}
                      id={`selectcontent-${index}`}
                      color={color === "light" ? "primary" : color}
                      checked={this.state.multiSelect[item]}
                      label={item}
                      className={`flex w-100 justify-between align-items-center pr-1`}
                    />
                  ) : (
                    <Radiobox
                      labelLeft
                      checked={item === radioSeleted ? true : false}
                      name={`selectcontent-${index}`}
                      id={`selectcontent-${index}`}
                      color={color === "light" ? "primary" : color}
                      onChange={() => this.handleRadio(item)}
                      label={item}
                      className={`flex w-100 justify-between align-items-center pr-1`}
                    />
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

Select.defaultProps = {
  currentSeleted: "select client",
  title: "dropDown name",
  list: ["one", "two", "five", "six", "seveen", "eight"],
  color: "primary",
  onSelect: function() {
    console.log("selected");
  }
};

Select.protoType = {
  list: PropTypes.array,
  title: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "warning",
    "purple",
    "green"
  ]).isRequired,
  name: PropTypes.string.isRequired
};

export default Select;
