import { useEffect, useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./roleForm.features";
import { RoleFormInput } from "./roleFormInput.component";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import { useSelectedRole } from "src/presentation/modules/roleManager/providers/providerSelectedRole";
import {
  useDialogActions,
  EDialogActionsActionKind,
} from "@presentation/providers/providerDialogActions";
import type { TRole } from "@access-manager/types";
import { RoleFormSelect } from "./roleFormSelect.component";

export function RoleForm() {
  const { role, handleUnSelectRole } = useSelectedRole();
  const { state, dispatch } = useDialogActions();
  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm({
    resolver: yupResolver(validationSchema()),
    defaultValues: useMemo(() => {
      if (role) return role;
    }, [role]),
  });

  useEffect(() => {
    if (role) reset(role);
  }, [role]);

  const onSubmit = (data: Omit<TRole, "createdAt" | "updatedAt">) =>
    console.log(data);

  return (
    <Dialog
      open={state.editModal}
      onClose={() => {
        console.log("dock");
      }}
      PaperComponent={Paper}
      fullWidth
    >
      <DialogTitle component="h5" variant="h5">
        Role form
      </DialogTitle>
      <DialogContent>
        <Stack gap={2}>
          <Stack direction="row" gap={1}>
            <RoleFormInput name="name" control={control} label="Role Name" />
            <RoleFormInput
              name="description"
              control={control}
              label="Role Description"
            />
          </Stack>
          <RoleFormSelect
            name="roleTypeId"
            control={control}
            label="Role Type"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            dispatch({ type: EDialogActionsActionKind.setOpenEditModal });
            setTimeout(() => handleUnSelectRole(), 300);
          }}
          variant="text"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          disabled={!(isDirty && isValid)}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}
