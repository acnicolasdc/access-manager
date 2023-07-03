import { LockOpenOutlined } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AuthenticationMemorized } from "@presentation/modules/authentication";

export function AuthScreen() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 20,
            px: 10,
            height: "100%",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOpenOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome
          </Typography>
          <Box mt={2} sx={{ width: "100%" }}>
            <AuthenticationMemorized />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
