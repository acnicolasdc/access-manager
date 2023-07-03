import MaterialTable, { TableProps } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import { TableBodyRow } from "./tableBodyRow.component";
import { TableEmpty } from "./tableEmpty.component";
import { TableHeadRow } from "./tableHeadRow.component";
import { TableSkeleton } from "./tableSkeleton.component";

export function Table({ children, ...restProps }: TableProps) {
  return (
    <TableContainer>
      <MaterialTable {...restProps}>{children}</MaterialTable>
    </TableContainer>
  );
}

Table.RowBody = TableBodyRow;
Table.RowHead = TableHeadRow;
Table.Cell = TableCell;
Table.Skeleton = TableSkeleton;
Table.IfIsEmpty = TableEmpty;
Table.Body = TableBody;
Table.Head = TableHead;
