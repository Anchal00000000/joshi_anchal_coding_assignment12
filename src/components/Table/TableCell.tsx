import React from "react";
import { TableCellProps } from "./TableCell.types";

const TableCell: React.FC<TableCellProps> = ({
  children,
  padding = "10px",
  border = "1px solid black",
}) => {
  return <td style={{ padding, border }}>{children}</td>;
};

export default TableCell;