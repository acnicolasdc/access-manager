import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";
import { Control, Controller } from "react-hook-form";
import TextField from "@presentation/components/textFiled";
import type { TUser } from "@access-manager/types";
import type { TKeyOfTUser } from "../core/updateUserForm";

export interface IUserFormInputProps {
  name: TKeyOfTUser;
  control: Control<Omit<TUser, "createdAt" | "updatedAt">> | undefined;
  label: string;
  setValue?: Dispatch<SetStateAction<string | null>>;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
}

export function UserFormInput({
  name,
  control,
  label,
  type,
  disabled = false,
}: IUserFormInputProps) {
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
          disabled={disabled}
          type={type}
        />
      )}
    />
  );
}
