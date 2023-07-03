import { useState } from "react";
import Table from "src/presentation/components/table";
import {
  COUNT_ADDITIONAL_COLUMNS,
  HEADER,
  MOCK_DATA,
} from "./tableUserList.constants";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Fade from "@mui/material/Fade";

export function TableUserList() {
  const [hovered, setHovered] = useState<string | null>(null);
  const loading = false;
  const handleHoverSelect = (value: string) => {
    if (hovered === value) return;
    setHovered(value);
  };
  const handleHoverUnSelect = () => {
    if (!hovered) return;
    setHovered(null);
  };
  return (
    <Table>
      <Table.Head>
        <Table.RowHead
          editable={false}
          disabled={false}
          numSelected={0}
          rowCount={0}
          onSelectAllClick={() => {
            console.log("login");
          }}
        >
          {HEADER.map(({ title, index }) => (
            <Table.Cell key={index}>{title}</Table.Cell>
          ))}
        </Table.RowHead>
      </Table.Head>
      {loading ? (
        <Table.Skeleton
          rows={5}
          columns={HEADER.length + COUNT_ADDITIONAL_COLUMNS}
        />
      ) : (
        <Table.IfIsEmpty
          isEmpty={false}
          colSpan={HEADER.length + COUNT_ADDITIONAL_COLUMNS}
          message="No Data Found"
        >
          <Table.Body>
            {MOCK_DATA.map((item) => {
              const isHovered = hovered === item.id;
              return (
                <Table.RowBody
                  editable={false}
                  disabled={false}
                  key={item.id}
                  selected={false}
                  onClick={() => {
                    console.log("Hello");
                  }}
                  onMouseEnter={() => handleHoverSelect(item.id)}
                  onMouseLeave={() => handleHoverUnSelect()}
                  checkboxProps={{
                    checked: false,
                    inputProps: {
                      "aria-labelledby": `enhanced-table-checkbox-${item.id}`,
                    },
                  }}
                  hover={true}
                >
                  <Table.Cell>
                    <Typography variant="body1" component="p">
                      {item.firstName}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <Typography variant="body1" component="p">
                      {item.middleName}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <Typography variant="body1" component="p" noWrap>
                      {item.lastName}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <Typography variant="body1" component="p" noWrap>
                      {item.email}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <Typography variant="body1" component="p" noWrap>
                      {item.secondaryEmail}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <Typography variant="body1" component="p" noWrap>
                      {item.phoneNumber}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <Typography variant="body1" component="p" noWrap>
                      {item.secondaryPhoneNumber}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <Typography variant="body1" component="p" noWrap>
                    {item.homeAddress}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <Typography variant="body1" component="p" noWrap>
                      Role
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <Fade in={isHovered}>
                      <Stack direction="row" alignItems="flex-end" spacing={1}>
                        <Button variant="text" disabled={false}>
                          Delete
                        </Button>
                        <Button disabled={false} variant="contained">
                          Edit
                        </Button>
                      </Stack>
                    </Fade>
                  </Table.Cell>
                </Table.RowBody>
              );
            })}
          </Table.Body>
        </Table.IfIsEmpty>
      )}
    </Table>
  );
}
