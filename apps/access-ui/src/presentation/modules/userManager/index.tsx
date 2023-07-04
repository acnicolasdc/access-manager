import { memo } from "react";
import TableUserList from "./containers/tableUserList";
import { UserForm } from "./containers/userForm";
import { SelectedUserProvider } from "./providers/providerSelectedUser";
import { DialogActionsProvider } from "@presentation/providers/providerDialogActions";

function UserManager() {
  return (
    <SelectedUserProvider>
      <DialogActionsProvider>
        <TableUserList />
        <UserForm />
      </DialogActionsProvider>
    </SelectedUserProvider>
  );
}

export const UserManagerMemorized = memo(UserManager);
