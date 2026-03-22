import React from 'react';
import { TableHeaderProps } from './TableHeader.types';

const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  backgroundColor = '#f0f0f0',
}) => {
  return <thead style={{ backgroundColor }}>{children}</thead>;
};

export default TableHeader;
