import React from 'react';
import { TableRowProps } from './TableRow.types';

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default TableRow;
