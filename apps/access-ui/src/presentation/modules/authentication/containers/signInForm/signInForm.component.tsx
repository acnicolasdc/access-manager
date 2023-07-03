import Stack from "@mui/material/Stack";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import type { TAuthentication } from "@access-manager/types";
import { validationSchema } from "./signInForm.features";
import { SignInFormInput } from "./signInFormInput.component";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export function UserForm() {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema()),
  });
  const onSubmit = (data: TAuthentication) => console.log(data);
  return (
    <Box sx={{ width: "100%" }}>
      <Stack gap={2}>
        <Stack gap={1}>
          <SignInFormInput name="username" control={control} label="Email" />
          <SignInFormInput name="password" control={control} label="Password" />
        </Stack>
        <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
          Sign In
        </Button>
      </Stack>
    </Box>
  );
}
