import Skeleton from "@mui/material/Skeleton";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import { TableBodyRow } from "./tableBodyRow.component";

export interface ITableSkeletonProps {
  columns: number;
  rows: number;
}

export function TableSkeleton({ columns, rows }: ITableSkeletonProps) {
  const columnsList = Array.from({ length: columns }, (_, i) => i + 1);
  const rowsList = Array.from({ length: rows }, (_, i) => i + 1);
  return (
    <TableBody>
      {rowsList.map((value) => (
        <TableBodyRow key={value}>
          {columnsList.map((value) => (
            <TableCell key={value}>
              <Skeleton height={30} />
            </TableCell>
          ))}
        </TableBodyRow>
      ))}
    </TableBody>
  );
}
