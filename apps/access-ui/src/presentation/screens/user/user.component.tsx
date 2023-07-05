import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import TabPanel, { a11yProps } from "@presentation/components/tabPanel";
import { UserManagerMemorized } from "@presentation/modules/userManager";
import { RoleManagerMemorized } from "@presentation/modules/roleManager";

import { useState } from "react";

const PREFIX = "manager-module";
export function UserScreen() {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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
      <Stack direction="column" gap={0}>
        <Stack direction="row" gap={2} alignItems="center">
          <Typography variant="h2" >Manager Docking Bay</Typography>
          <Tabs value={value} onChange={handleChange} aria-label="edi">
            <Tab label="Users" {...a11yProps(0, PREFIX)} />
            <Tab label="Roles" {...a11yProps(1, PREFIX)} />
          </Tabs>
        </Stack>
        <TabPanel value={value} index={0} prefix={PREFIX}>
          <UserManagerMemorized />
        </TabPanel>
        <TabPanel value={value} index={1} prefix={PREFIX}>
          <RoleManagerMemorized />
        </TabPanel>
      </Stack>
    </Container>
  );
}
