import {
  blue,
  grey,
  lightBlue,
  lightGreen,
  red,
  yellow,
} from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { EFontSizes } from "./constant";
import palette, { colors } from "./palette";
import typography, { cssBaseline } from "./typography";

const theme = createTheme({
  typography,
  palette,
  components: {
    MuiCssBaseline: cssBaseline,
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "none",
        },
        sizeLarge: {
          fontSize: EFontSizes.normal,
        },
        sizeMedium: {
          fontSize: EFontSizes.medium,
        },
        sizeSmall: {
          fontSize: EFontSizes.default,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "10px",
        },
        head: {
          textTransform: "uppercase",
          borderBottom: "1px solid",
          borderTop: "1px solid",
          borderColor: grey[400],
          color: grey[400],
          fontSize: EFontSizes.medium,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: grey[800],
        },
        sizeMedium: ({ theme }) => theme.typography.body2,
        sizeSmall: ({ theme }) => theme.typography.caption,
        colorError: {
          backgroundColor: red[50],
          color: red[700],
        },
        colorInfo: {
          backgroundColor: lightBlue[100],
          color: lightBlue[700],
        },
        colorSuccess: {
          backgroundColor: lightGreen[100],
          color: lightGreen[700],
        },
        colorWarning: {
          backgroundColor: yellow[100],
          color: yellow[700],
        },
        colorSecondary: {
          backgroundColor: grey[300],
          color: grey[700],
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          background: colors.mileMarker,
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: colors.frogger,
          borderRadius: 5,
        },
        standardError: {
          backgroundColor: red[50],
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: red[700],
          borderRadius: 5,
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          ".Mui-selected": {
            backgroundColor: "transparent !important",
            border: `1px solid ${grey[500]}`,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(odd)": {
            borderBottom: "1px solid",
            borderColor: grey[400],
          },
          "&:last-child nth-of-type(odd)": {
            border: 0,
          },
        },
        hover: {
          color: blue[900],
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "2px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          [`& fieldset`]: {
            borderRadius: "2px",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.Mui-focused": {
            backgroundColor: "transparent",
            borderWidth: "2px",
            borderColor: theme.palette.primary.main,
          },
          backgroundColor: "transparent",
          border: `1px solid ${theme.palette.grey[300]}`,
          borderRadius: "2px",
          ":before": {
            content: "none",
          },
          ":after": {
            content: "none",
          },
          ":hover": {
            borderColor: theme.palette.primary.main,
            backgroundColor: "transparent",
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.grey[200],
            color: theme.palette.grey[400],
            borderColor: theme.palette.grey[200],
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: ({ theme }) => ({
          border: `0px solid ${theme.palette.grey[300]}`,
          "&.MuiInputBase-inputSizeSmall": {
            padding: "13px 14px",
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          ":hover": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
              backgroundColor: "transparent",
            },
          },
        }),
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.Mui-focused": {
            color: theme.palette.grey[700],
          },
        }),
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: palette.text.primary,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: EFontSizes.medium,
          "&.Mui-selected": {
            color: "black",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          "&::before": {
            backgroundColor: "black",
          },
        },
        tooltip: {
          backgroundColor: "black",
          fontSize: EFontSizes.medium,
          borderRadius: "2px",
          padding: "12px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          ".MuiBackdrop-root": {
            backgroundColor: "transparent",
          },
        },
        paper: ({ theme }) => ({
          boxShadow: "none",
          borderLeftWidth: 1,
          borderLeftStyle: "solid",
          borderLeftColor: theme.palette.grey[400],
          borderRadius: 0,
        }),
      },
    },
  },
});

export default theme;
