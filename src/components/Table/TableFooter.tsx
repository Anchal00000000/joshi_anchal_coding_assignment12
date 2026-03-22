import React from 'react';
import { TableFooterProps } from './TableFooter.types';

const TableFooter: React.FC<TableFooterProps> = ({
  children,
  backgroundColor = '#f0f0f0',
}) => {
  return <tfoot style={{ backgroundColor }}>{children}</tfoot>;
};

export default TableFooter;
