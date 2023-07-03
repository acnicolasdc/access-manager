import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import TableCell from "@mui/material/TableCell";
import TableRow, { TableRowProps } from "@mui/material/TableRow";

export interface ITableBodyRowProps extends TableRowProps {
  editable?: boolean;
  checkboxProps?: CheckboxProps;
  disabled?: boolean;
}

export function TableBodyRow({
  editable,
  children,
  selected,
  checkboxProps,
  hover = false,
  disabled = false,
  ...restProps
}: ITableBodyRowProps) {
  return (
    <TableRow
      {...restProps}
      role={editable ? "checkbox" : undefined}
      tabIndex={-1}
      selected={selected}
      hover={hover}
    >
      {!!editable && (
        <TableCell padding="checkbox">
          <Checkbox
            {...checkboxProps}
            sx={{ padding: 0 }}
            disabled={disabled}
          />
        </TableCell>
      )}
      {children}
    </TableRow>
  );
}
