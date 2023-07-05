import { useEffect, useMemo, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./userForm.features";
import { UserFormInput } from "./userFormInput.component";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import { useSelectedUser } from "@presentation/modules/userManager/providers/providerSelectedUser";
import {
  useDialogActions,
  EDialogActionsActionKind,
} from "@presentation/providers/providerDialogActions";
import type { TUser } from "@access-manager/types";
import { UserFormSelect } from "./userFormSelect.component";
import useUpdateUser from "@presentation/hooks/useCase/useUpdateUser";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import LoadingButton from "src/presentation/components/loadingButton";

export function UserForm() {
  const { loading, updateUser } = useUpdateUser();
  const { user, handleUnSelectUser } = useSelectedUser();
  const { state, dispatch } = useDialogActions();
  const [open, setOpen] = useState(false);
  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm({
    resolver: yupResolver(validationSchema()),
    defaultValues: useMemo(() => {
      if (user) return user;
    }, [user]),
  });

  useEffect(() => {
    if (user) reset(user);
  }, [user]);

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleCloseModal = () => {
    dispatch({ type: EDialogActionsActionKind.setOpenEditModal });
    setTimeout(() => {
      handleUnSelectUser();
    }, 300);
  };

  const onSubmit = (data: Omit<TUser, "createdAt" | "updatedAt">) =>
    updateUser(data).then(() => {
      handleCloseModal();
      setTimeout(() => setOpen(true), 300);
    });
  return (
    <>
      <Dialog
        open={state.editModal}
        closeAfterTransition
        PaperComponent={Paper}
        fullWidth
      >
        <DialogTitle component="h5" variant="h5">
          User form
        </DialogTitle>
        <DialogContent>
          <Stack gap={2}>
            <Stack direction="row" gap={1}>
              <UserFormInput
                name="firstName"
                control={control}
                label="First Name"
              />
              <UserFormInput
                name="middleName"
                control={control}
                label="Middle Name"
              />
              <UserFormInput
                name="lastName"
                control={control}
                label="Last Name"
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <UserFormInput name="email" control={control} label="Email" />
              <UserFormInput
                name="secondaryEmail"
                control={control}
                label="Secondary Email"
              />
            </Stack>
            <UserFormInput
              name="homeAddress"
              control={control}
              label="Home Address"
            />
            <Stack direction="row" gap={1}>
              <UserFormInput
                name="phoneNumber"
                control={control}
                label="Phone Number"
              />
              <UserFormInput
                name="secondaryPhoneNumber"
                control={control}
                label="Secondary Phone Number"
              />
            </Stack>
            <UserFormSelect name="roleId" control={control} label="Role" />
            <UserFormInput
              name="password"
              control={control}
              label="Password"
              type="password"
              disabled
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} variant="text" disabled={loading}>
            Cancel
          </Button>
          <LoadingButton
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            disabled={!(isDirty && isValid)}
            loading={loading}
            loadingIndicator="Updating"
          >
            Update
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity="success">User updated successfully</Alert>
      </Snackbar>
    </>
  );
}
