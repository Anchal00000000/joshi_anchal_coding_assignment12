import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table, TableRow, TableCell } from './index';

test('Table renders', () => {
  render(
    <Table>
      <tbody>
        <TableRow>
          <TableCell>Data</TableCell>
        </TableRow>
      </tbody>
    </Table>,
  );

  expect(screen.getByText('Data')).toBeVisible();
});
