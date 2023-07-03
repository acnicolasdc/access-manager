import { RefObject, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment, {
  inputAdornmentClasses,
} from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import TextFieldMUI, { TextFieldProps } from "@mui/material/TextField";

export interface ITextFieldProps {
  onClear?: () => void;
}
export type TRefType =
  | ((instance: HTMLDivElement | null) => void)
  | RefObject<HTMLDivElement>
  | null
  | undefined;

export enum EDisplayVariations {
  flex = "flex",
  none = "none",
}
const mergeRefs =
  (...refs: TRefType[]) =>
  (node: HTMLDivElement | null) => {
    for (let i = 0; i < refs.length; i += 1) {
      const ref = refs[i] as any;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }
  };

export const StyledInputAdornment = styled(InputAdornment)(({ theme }) => ({
  [`&.${inputAdornmentClasses.root}`]: {
    display: "none",
    cursor: "pointer",
    width: "30px",
    height: "24px",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: theme.palette.grey[50],
      borderRadius: "50%",
    },
  },
}));

export function TextField({
  onChange,
  onBlur,
  onMouseOver,
  onMouseOut,
  onClear,
  inputRef,
  InputProps,
  ...restProps
}: TextFieldProps & ITextFieldProps) {
  const endAdornmentRef = useRef<HTMLDivElement>(null);
  const localInputRef = useRef<HTMLInputElement>(null);
  const handleDisplayAdornment = (display: string) => {
    if (!endAdornmentRef?.current) return;
    endAdornmentRef.current.style.display = display;
  };
  const shouldDisplayAdornment = () => {
    if (!localInputRef?.current) return false;
    return !!localInputRef.current.value;
  };
  return (
    <TextFieldMUI
      {...restProps}
      inputRef={mergeRefs(localInputRef, inputRef)}
      onChange={(event) => {
        if (shouldDisplayAdornment())
          handleDisplayAdornment(EDisplayVariations.flex);
        onChange?.(event);
      }}
      onMouseOver={(event) => {
        if (shouldDisplayAdornment())
          handleDisplayAdornment(EDisplayVariations.flex);
        onMouseOver?.(event);
      }}
      onBlur={(event) => {
        handleDisplayAdornment(EDisplayVariations.none);
        onBlur?.(event);
      }}
      onMouseOut={(event) => {
        handleDisplayAdornment(EDisplayVariations.none);
        onMouseOut?.(event);
      }}
      InputProps={{
        ...InputProps,
        endAdornment: (
          <StyledInputAdornment
            position="end"
            ref={endAdornmentRef}
            onClick={() => {
              onClear?.();
              if (!localInputRef?.current) return;
              localInputRef.current.value = "";
            }}
          >
            <CloseIcon sx={{ fontSize: "20px" }} />
          </StyledInputAdornment>
        ),
      }}
    />
  );
}
