import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./core/configuration/theme";
import router from "@presentation/screens";
import { UserSessionProvider } from "@presentation/providers/providerUserSession";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserSessionProvider>
        <RouterProvider router={router} />
      </UserSessionProvider>
    </ThemeProvider>
  );
}

export default App;
