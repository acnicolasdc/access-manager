import { Dispatch, SetStateAction } from "react";
import { Control, Controller } from "react-hook-form";
import TextField from "@presentation/components/textFiled";
import type { TRole } from "@access-manager/types";
import type { TKeyOfTRole } from "./roleForm";

export interface IRoleFormInputProps {
  name: TKeyOfTRole;
  control: Control<Omit<TRole, "roleType">> | undefined;
  label: string;
  setValue?: Dispatch<SetStateAction<string | null>>;
}

export function RoleFormInput({ name, control, label }: IRoleFormInputProps) {
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
