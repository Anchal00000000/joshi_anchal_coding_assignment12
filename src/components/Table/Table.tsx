import React from "react";
import { TableProps } from "./Table.types";

const Table: React.FC<TableProps> = ({
  children,
  border = "1px solid black",
  disabled = false,
}) => {
  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        border,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "default",
      }}
    >
      {children}
    </table>
  );
};

export default Table;