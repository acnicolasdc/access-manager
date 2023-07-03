import React from "react";
import Checkbox from "@mui/material/Checkbox";
import TableCell from "@mui/material/TableCell";
import TableRow, { TableRowProps } from "@mui/material/TableRow";

export interface ITableHeadRowProps extends TableRowProps {
  editable?: boolean;
  rowCount: number;
  numSelected: number;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export function TableHeadRow({
  editable,
  children,
  rowCount,
  numSelected,
  onSelectAllClick,
  disabled = false,
  ...restProps
}: ITableHeadRowProps) {
  return (
    <TableRow {...restProps}>
      {!!editable && (
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            disabled={disabled}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
            sx={{ padding: 0 }}
          />
        </TableCell>
      )}
      {children}
    </TableRow>
  );
}
