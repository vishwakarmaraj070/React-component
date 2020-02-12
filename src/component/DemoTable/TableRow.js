import React from "react";
import PropTypes from "prop-types";
import { NumberField, Dropdown, Button } from "phoenix-component";

const TableRow = props => {
  const { ...attributes } = props;

  return (
    <tr {...attributes}>
      <td>
        <NumberField size="sm" />
      </td>
      <td>
        <NumberField size="sm" />
      </td>
      <td>
        <Dropdown menu="Rate">
          {[1, 2, 3, 4].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Dropdown>
      </td>
      <td>
        <NumberField size="sm" />
      </td>
      <td>
        <NumberField size="sm" />
      </td>
      <td>
        <NumberField size="sm" />
      </td>
      <td>
        <NumberField size="sm" />
      </td>
      <td>
        <NumberField size="sm" />
      </td>
      <Button iconBtn size="sm">
        X
      </Button>
    </tr>
  );
};

TableRow.propTypes = {};

export default TableRow;
