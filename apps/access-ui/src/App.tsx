import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./core/configuration/theme";
import { UserScreen } from "./presentation/screens/user";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserScreen />
    </ThemeProvider>
  );
}

export default App;
