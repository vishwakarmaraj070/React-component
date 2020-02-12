import PropTypes from "prop-types";
import React from "react";
import Button from "../../Button";

const TableBody = props => {
  const { children, columns, rows, add, ...attributes } = props;

  const renderTD = (field, key, array, row) => {
    if (field === "clickEvent") return null;
    if (field !== "colspan") {
      if (row.message) {
        return (
          key === 0 && (
            <td key={key} colSpan={row.colspan}>
              {row.message}
            </td>
          )
        );
      } else {
        return (
          (array[key + 1] !== "colspan" && row[field] !== null && (
            <td key={key}>{row[field]}</td>
          )) || <td key={key}></td>
        );
      }
    } else {
      return (
        <td key={key} colSpan={row["colspan"]}>
          {row[array[key - 1]]}
        </td>
      );
    }
  };

  return (
    <tbody data-test="table-body" {...attributes}>
      {rows &&
        rows.map((row, index) => (
          <tr
            onClick={
              row.hasOwnProperty("clickEvent") ? row.clickEvent : undefined
            }
            key={index}
          >
            {columns ? (
              columns.map(({ field }, key, array) =>
                renderTD(field, key, array, row)
              )
            ) : (
              <>
                {Object.keys(row).map((field, key, array) =>
                  renderTD(field, key, array, row)
                )}
                {add && (
                  <td style={{ width: "40px" }}>
                    <Button iconBtn size="sm" onClick={e => console.log(index)}>
                      d
                    </Button>
                  </td>
                )}
              </>
            )}
          </tr>
        ))}
      {add && (
        <tr>
          <td style={{ border: "none" }}>
            <Button>Add</Button>
          </td>
        </tr>
      )}

      {children}
    </tbody>
  );
};

TableBody.propTypes = {
  children: PropTypes.node,
  rows: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};

export default TableBody;
