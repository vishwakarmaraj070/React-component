import React, { lazy, Suspense, useState } from "react";
import PropTypes from "prop-types";
import Loader from "../Loader";
import TableRow from "./TableRow";
import Button from "../Button";
const Table = lazy(() => import("../EditableTable/Table"));
const TableHead = lazy(() => import("../EditableTable/TableHead"));
const TableBody = lazy(() => import("../EditableTable/TableBody"));
const TableFoot = lazy(() => import("../EditableTable/TableFoot"));

const TableANX = props => {
  const [state, setState] = useState({
    tableData: []
  });

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Table small bordered>
          <TableHead>
            <tr>
              <th>HSN Code</th>
              <th>Taxable</th>
              <th>Rate</th>
              <th>IGST</th>
              <th>CGST</th>
              <th>SGST</th>
              <th>CESS</th>
              <th>Total</th>
              <th>Delete</th>
            </tr>
          </TableHead>
          <TableBody>
            {state.tableData.length ? (
              state.tableData.map((item, index) => (
                <TableRow key={index} item={item} index={index} />
              ))
            ) : (
              <TableRow />
            )}
            <tr>
              <td colSpan="9">
                <Button iconBtn>+</Button>
              </td>
            </tr>
          </TableBody>
          <TableFoot>
            <tr>
              <th>HSN Code</th>
              <th>Taxable</th>
              <th>Rate</th>
              <th>IGST</th>
              <th>CGST</th>
              <th>SGST</th>
              <th>CESS</th>
              <th>Total</th>
              <th>Delete</th>
            </tr>
          </TableFoot>
        </Table>
      </Suspense>
    </>
  );
};

TableANX.propTypes = {};

export default TableANX;
