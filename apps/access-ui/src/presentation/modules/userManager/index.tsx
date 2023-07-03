import { memo } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TableUserList from "./containers/tableUserList";
import { UserForm } from "./containers/userForm";
import { SelectedUserProvider } from "./providers/providerSelectedUser";
import { DialogActionsProvider } from "./providers/providerDialogActions";

function UserManager() {
  return (
    <Stack direction="column" gap={2}>
      <Stack direction="row" gap={2} alignItems="center">
        <Typography variant="h2">User Manager</Typography>
      </Stack>
      <SelectedUserProvider>
        <DialogActionsProvider>
          <TableUserList />
          <UserForm />
        </DialogActionsProvider>
      </SelectedUserProvider>
    </Stack>
  );
}

export const UserManagerMemorized = memo(UserManager);
