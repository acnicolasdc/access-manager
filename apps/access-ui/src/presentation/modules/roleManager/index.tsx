import { memo, useState } from "react";
import TableRoleList from "./containers/tableRoleList";
import { UpdateRoleForm } from "./containers/updateRoleForm";
import { SelectedRoleProvider } from "./providers/providerSelectedRole";
import { DialogActionsProvider } from "@presentation/providers/providerDialogActions";
import { RoleListProvider } from "./providers/providerRoleList/providerRoleList.context";
import Button from "@mui/material/Button";
import { CreateRoleForm } from "./containers/createRoleForm";

function RoleManager() {
  const [openCreateRole, setOpenCreateRole] = useState(false);
  return (
    <SelectedRoleProvider>
      <DialogActionsProvider>
        <RoleListProvider>
          <TableRoleList
            header={
              <Button
                variant="contained"
                onClick={() => setOpenCreateRole(true)}
              >
                Create User
              </Button>
            }
          />
          <UpdateRoleForm />
          <CreateRoleForm
            open={openCreateRole}
            onClose={() => setOpenCreateRole(false)}
          />
        </RoleListProvider>
      </DialogActionsProvider>
    </SelectedRoleProvider>
  );
}

export const RoleManagerMemorized = memo(RoleManager);
