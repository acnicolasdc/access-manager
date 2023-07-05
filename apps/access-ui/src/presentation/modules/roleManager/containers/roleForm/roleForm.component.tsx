import { useEffect, useMemo, useState } from "react";
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
import { useSelectedRole } from "@presentation/modules/roleManager/providers/providerSelectedRole";
import {
  useDialogActions,
  EDialogActionsActionKind,
} from "@presentation/providers/providerDialogActions";
import type { TRole } from "@access-manager/types";
import { RoleFormSelect } from "./roleFormSelect.component";
import LoadingButton from "@presentation/components/loadingButton";
import useUpdateRole from "@presentation/hooks/useCase/useUpdateRole";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useRoleList } from "@presentation/modules/roleManager/providers/providerRoleList";

export function RoleForm() {
  const { loading: requesting, getAllRoles } = useRoleList();
  const { loading, updateRole } = useUpdateRole();
  const [open, setOpen] = useState(false);
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
  const handleCloseModal = () => {
    dispatch({ type: EDialogActionsActionKind.setOpenEditModal });
    setTimeout(() => handleUnSelectRole(), 300);
  };

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (role) reset(role);
  }, [role]);

  const onSubmit = (data: Omit<TRole, "createdAt" | "updatedAt">) =>
    updateRole(data).then(() => {
      getAllRoles().then(() => {
        handleCloseModal();
        setTimeout(() => setOpen(true), 300);
      });
    });

  return (
    <>
      <Dialog
        open={state.editModal}
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
          <Button onClick={handleCloseModal} variant="text">
            Cancel
          </Button>
          <LoadingButton
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            disabled={!(isDirty && isValid)}
            loading={loading || requesting}
            loadingIndicator="Requesting"
          >
            Update
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity="success">Role updated successfully</Alert>
      </Snackbar>
    </>
  );
}
