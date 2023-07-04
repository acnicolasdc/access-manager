import { memo } from "react";
import TableRoleList from "./containers/tableRoleList";
import { RoleForm } from "./containers/roleForm";
import { SelectedRoleProvider } from "./providers/providerSelectedRole";
import { DialogActionsProvider } from "@presentation/providers/providerDialogActions";

function RoleManager() {
  return (
    <SelectedRoleProvider>
      <DialogActionsProvider>
        <TableRoleList />
        <RoleForm />
      </DialogActionsProvider>
    </SelectedRoleProvider>
  );
}

export const RoleManagerMemorized = memo(RoleManager);
