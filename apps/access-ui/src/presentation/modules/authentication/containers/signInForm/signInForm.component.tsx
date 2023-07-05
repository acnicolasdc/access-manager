import Stack from "@mui/material/Stack";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import type { TAuthentication } from "@access-manager/types";
import { validationSchema } from "./signInForm.features";
import { SignInFormInput } from "./signInFormInput.component";
import Box from "@mui/material/Box";
import useSignIn from "@presentation/hooks/useCase/useSignIn";
import LoadingButton from "@presentation/components/loadingButton";

export interface UserFormProps {
  onSuccess: (accessToken: string) => void;
  onError: () => void;
}

export function UserForm({ onSuccess, onError }: UserFormProps) {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema()),
  });
  const { loading, signIn } = useSignIn();
  const onSubmit = (data: TAuthentication) =>
    signIn(data).then((response) => {
      if (response.result?.access_token) {
        return onSuccess(response.result.access_token);
      }
      return onError();
    });

  return (
    <Box sx={{ width: "100%" }}>
      <Stack gap={2}>
        <Stack gap={1}>
          <SignInFormInput name="username" control={control} label="Email" />
          <SignInFormInput
            name="password"
            control={control}
            label="Password"
            type="password"
          />
        </Stack>
        <LoadingButton
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          loading={loading}
          loadingIndicator="Requesting"
        >
          Sign In
        </LoadingButton>
      </Stack>
    </Box>
  );
}
