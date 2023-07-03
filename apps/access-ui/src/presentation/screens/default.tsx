import Container from "@mui/material/Container";
import { UserManagerMemorized } from "../modules/userManager";

function Default() {
  return (
    <Container
      sx={{
        padding: 5,
        marginRight: 0,
        marginLeft: 0,
        paddingLeft: 5,
        paddingRight: 5,
      }}
      maxWidth={false}
    >
      <UserManagerMemorized />
    </Container>
  );
}

export default Default;
