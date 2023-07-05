import { memo } from "react";
import TableRoleList from "./containers/tableRoleList";
import { RoleForm } from "./containers/roleForm";
import { SelectedRoleProvider } from "./providers/providerSelectedRole";
import { DialogActionsProvider } from "@presentation/providers/providerDialogActions";
import { RoleListProvider } from "./providers/providerRoleList/providerRoleList.context";

function RoleManager() {
  return (
    <SelectedRoleProvider>
      <DialogActionsProvider>
        <RoleListProvider>
          <TableRoleList />
          <RoleForm />
        </RoleListProvider>
      </DialogActionsProvider>
    </SelectedRoleProvider>
  );
}

export const RoleManagerMemorized = memo(RoleManager);
