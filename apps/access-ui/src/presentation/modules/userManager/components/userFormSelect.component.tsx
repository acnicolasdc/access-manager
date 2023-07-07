import { Dispatch, SetStateAction, useEffect } from "react";
import { Control, Controller } from "react-hook-form";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import theme from "@core/configuration/theme";
import MenuItem from "@mui/material/MenuItem";
import useGetAllRoles from "src/presentation/hooks/useCase/useGetAllRoles";

export interface IUserFormSelectProps {
  name: string;
  control?: Control<any>;
  label: string;
  setValue?: Dispatch<SetStateAction<string | null>>;
}

export function UserFormSelect({ name, control, label }: IUserFormSelectProps) {
  const { loading, getAllRoles, roles } = useGetAllRoles();

  useEffect(() => {
    getAllRoles();
  }, []);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Select
          displayEmpty
          value={value}
          error={!!error}
          disabled={loading}
          onChange={(event) => onChange(event.target.value)}
          input={<OutlinedInput />}
          size="small"
          renderValue={(selected) => {
            if (!selected) {
              return (
                <span style={{ color: theme.palette.grey[600] }}>{label}</span>
              );
            }

            return roles.find(({ id }) => id === selected)?.name || selected;
          }}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            {label}
          </MenuItem>
          {roles.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
}
