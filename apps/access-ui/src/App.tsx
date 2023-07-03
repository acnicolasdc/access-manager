import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./core/configuration/theme";
import Default from "./presentation/screens/default";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Default />
    </ThemeProvider>
  );
}

export default App;
