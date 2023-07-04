import { useEffect, useMemo } from "react";
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

export function UserForm() {
  const { user, handleUnSelectUser } = useSelectedUser();
  const { state, dispatch } = useDialogActions();
  const { control, reset, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema()),
    defaultValues: useMemo(() => {
      if (user) return user;
    }, [user]),
  });

  useEffect(() => {
    if (user) reset(user);
  }, [user]);

  const onSubmit = (data: TUser) => console.log(data);

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
          <UserFormInput name="password" control={control} label="Password" />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            dispatch({ type: EDialogActionsActionKind.setOpenEditModal });
            setTimeout(() => handleUnSelectUser(), 300);
          }}
          variant="text"
        >
          Cancel
        </Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}
