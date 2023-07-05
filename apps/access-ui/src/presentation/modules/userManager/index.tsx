import { memo, useState } from "react";
import Button from "@mui/material/Button";
import TableUserList from "./containers/tableUserList";
import { UpdateUserForm } from "./containers/updateUserForm";
import { CreateUserForm } from "./containers/createUserForm";
import { SelectedUserProvider } from "./providers/providerSelectedUser";
import { DialogActionsProvider } from "@presentation/providers/providerDialogActions";
import { UserListProvider } from "./providers/providerUserList";

function UserManager() {
  const [openCreateUser, setOpenCreateUser] = useState(false);
  return (
    <SelectedUserProvider>
      <DialogActionsProvider>
        <UserListProvider>
          <TableUserList
            header={
              <Button
                variant="contained"
                onClick={() => setOpenCreateUser(true)}
              >
                Create User
              </Button>
            }
          />
          <UpdateUserForm />
          <CreateUserForm
            open={openCreateUser}
            onClose={() => setOpenCreateUser(false)}
          />
        </UserListProvider>
      </DialogActionsProvider>
    </SelectedUserProvider>
  );
}

export const UserManagerMemorized = memo(UserManager);
