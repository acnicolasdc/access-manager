import { Dispatch, SetStateAction } from "react";
import { Control, Controller } from "react-hook-form";
import TextField from "@presentation/components/textFiled";
import type { TAuthentication } from "@access-manager/types";
import type { TKeyOfTAuthentication } from "./sigInForm";

export interface ISignInFormInputProps {
  name: TKeyOfTAuthentication;
  control: Control<TAuthentication> | undefined;
  label: string;
  setValue?: Dispatch<SetStateAction<string | null>>;
}

export function SignInFormInput({
  name,
  control,
  label,
}: ISignInFormInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="filled"
        />
      )}
    />
  );
}
