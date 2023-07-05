import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./createUserForm.features";
import { UserFormInput } from "@presentation/modules/userManager/components/userFormInput.component";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import type { TUser } from "@access-manager/types";
import { UserFormSelect } from "@presentation/modules/userManager/components/userFormSelect.component";
import useCreateUser from "@presentation/hooks/useCase/useCreateUser";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import LoadingButton from "@presentation/components/loadingButton";
import { useUserList } from "@presentation/modules/userManager/providers/providerUserList";

export interface ICreateUserFormProps {
  open: boolean;
  onClose: () => void;
}

export function CreateUserForm({ open, onClose }: ICreateUserFormProps) {
  const { loading, createUser } = useCreateUser();
  const { getAllUsers, loading: requesting } = useUserList();
  const [display, setDisplay] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm({
    resolver: yupResolver(validationSchema()),
  });

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setDisplay(false);
  };

  const onSubmit = (data: Omit<TUser, "createdAt" | "updatedAt">) =>
    createUser(data).then(() => {
      getAllUsers().then(() => {
        onClose();
        setTimeout(() => setDisplay(true), 300);
      });
    });
  return (
    <>
      <Dialog open={open} closeAfterTransition PaperComponent={Paper} fullWidth>
        <DialogTitle component="h5" variant="h5">
          Create User form
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
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="text" disabled={loading}>
            Cancel
          </Button>
          <LoadingButton
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            disabled={!(isDirty && isValid)}
            loading={loading || requesting}
            loadingIndicator="Updating"
          >
            Update
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <Snackbar open={display} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity="success">User created successfully</Alert>
      </Snackbar>
    </>
  );
}
