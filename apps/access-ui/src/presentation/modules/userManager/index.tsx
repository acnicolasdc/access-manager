import { memo } from "react";
import TableUserList from "./containers/tableUserList";
import { UserForm } from "./containers/userForm";
import { SelectedUserProvider } from "./providers/providerSelectedUser";
import { DialogActionsProvider } from "@presentation/providers/providerDialogActions";
import { UserListProvider } from "./providers/providerUserList";

function UserManager() {
  return (
    <SelectedUserProvider>
      <DialogActionsProvider>
        <UserListProvider>
          <TableUserList />
          <UserForm />
        </UserListProvider>
      </DialogActionsProvider>
    </SelectedUserProvider>
  );
}

export const UserManagerMemorized = memo(UserManager);
