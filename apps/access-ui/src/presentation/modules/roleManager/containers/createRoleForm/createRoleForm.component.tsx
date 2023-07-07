import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./createRoleForm.features";
import { RoleFormInput } from "../../components/roleFormInput.component";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import type { TRoleCreate } from "@access-manager/types";
import { RoleFormSelect } from "../../components/roleFormSelect.component";
import LoadingButton from "@presentation/components/loadingButton";
import useCreateRole from "@presentation/hooks/useCase/useCreateRole";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useRoleList } from "@presentation/modules/roleManager/providers/providerRoleList";

export interface ICreateRoleFormProps {
  open: boolean;
  onClose: () => void;
}

export function CreateRoleForm({ open, onClose }: ICreateRoleFormProps) {
  const { loading: requesting, getAllRoles } = useRoleList();
  const { loading, createRole } = useCreateRole();
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

  const onSubmit = (data: TRoleCreate) =>
    createRole(data).then(() => {
      getAllRoles().then(() => {
        onClose();
        setTimeout(() => setDisplay(true), 300);
      });
    });
  return (
    <>
      <Dialog open={open} PaperComponent={Paper} fullWidth>
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
          <Button onClick={onClose} variant="text">
            Cancel
          </Button>
          <LoadingButton
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            disabled={!(isDirty && isValid)}
            loading={loading || requesting}
            loadingIndicator="Requesting"
          >
            Create
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <Snackbar open={display} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity="success">Role created successfully</Alert>
      </Snackbar>
    </>
  );
}
