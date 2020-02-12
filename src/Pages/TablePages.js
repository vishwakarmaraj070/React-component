import React from "react";
import PropTypes from "prop-types";
import {
  EditableTable,
  TableBody,
  TableFoot,
  TableHead
} from "../component/EditableTable";
import { Input } from "../component/Input";
import Button from "../component/Button";

const TablePages = props => {
  return (
    <>
      <div>
        <h3>Table</h3>
        <EditableTable small bordered striped hover>
          <TableHead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Department</th>
            </tr>
          </TableHead>
          <TableBody>
            <tr>
              <td>
                <Input />
                <span>asdfasdfasdf</span>
              </td>
              <td>Raj</td>
              <td>Developer</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Raj</td>
              <td>
                <Button>Button</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Raj</td>
              <td>Developer</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Raj</td>
              <td>Developer</td>
            </tr>
          </TableBody>
        </EditableTable>
      </div>
      <pre className="how-to">{`<EditableTable small bordered striped hover>
          <TableHead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Department</th>
            </tr>
          </TableHead>
          <TableBody>
            <tr>
              <td>
                <Input />
                <span>asdfasdfasdf</span>
              </td>
              <td>Raj</td>
              <td>Developer</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Raj</td>
              <td>
                <Button>Button</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Raj</td>
              <td>Developer</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Raj</td>
              <td>Developer</td>
            </tr>
          </TableBody>
          <TableFoot>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Department</th>
            </tr>
          </TableFoot>
        </EditableTable>`}</pre>
    </>
  );
};

TablePages.propTypes = {};

export default TablePages;
