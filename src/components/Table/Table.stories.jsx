import Table from './Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

const meta = {
  title: 'Components/Table',
  component: Table,
};

export default meta;

export const Default = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
        <TableCell>Header 3</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow>
        <TableCell>Row 1, Cell 1</TableCell>
        <TableCell>Row 1, Cell 2</TableCell>
        <TableCell>Row 1, Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 2, Cell 1</TableCell>
        <TableCell>Row 2, Cell 2</TableCell>
        <TableCell>Row 2, Cell 3</TableCell>
      </TableRow>
    </tbody>
    <TableFooter>
      <TableRow>
        <TableCell>Footer 1</TableCell>
        <TableCell>Footer 2</TableCell>
        <TableCell>Footer 3</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);
