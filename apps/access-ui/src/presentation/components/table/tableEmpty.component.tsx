import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

import { TableBodyRow } from "./tableBodyRow.component";

export interface ITableEmptyProps {
  isEmpty: boolean;
  message: string;
  colSpan: number;
  children: JSX.Element | null;
}

export function TableEmpty({
  isEmpty,
  message,
  colSpan,
  children,
}: ITableEmptyProps) {
  if (isEmpty) {
    return (
      <TableBody>
        <TableBodyRow
          onClick={(e) => e.preventDefault()}
          sx={{
            height: 500,
            "::hover": {
              backgroundColor: "unset",
            },
          }}
        >
          <TableCell
            colSpan={colSpan}
            sx={{ border: "none", textAlign: "center" }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{ color: "grey.900" }}
            >
              {message}
            </Typography>
          </TableCell>
        </TableBodyRow>
      </TableBody>
    );
  }
  return children;
}
