import { Dispatch, SetStateAction } from "react";
import { Control, Controller } from "react-hook-form";
import TextField from "@presentation/components/textFiled";
import type { TUser } from "@access-manager/types";
import type { TKeyOfTUser } from "./userForm";

export interface IUserFormInputProps {
  name: TKeyOfTUser;
  control: Control<TUser> | undefined;
  label: string;
  setValue?: Dispatch<SetStateAction<string | null>>;
}

export function UserFormInput({ name, control, label }: IUserFormInputProps) {
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
