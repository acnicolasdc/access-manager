import { memo } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TableEdiList from "./containers/tableEdiList";

function UserManager() {
  return (
    <Stack direction="column" gap={1}>
      <Stack direction="row" gap={2} alignItems="center">
        <Typography variant="h2">User Manager</Typography>
      </Stack>
      <TableEdiList />
    </Stack>
  );
}

export const UserManagerMemorized = memo(UserManager);
