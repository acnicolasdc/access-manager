import { useState } from "react";
import Table from "@presentation/components/table";
import { COUNT_ADDITIONAL_COLUMNS, HEADER } from "./tableUserList.constants";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Fade from "@mui/material/Fade";
import { useSelectedUser } from "@presentation/modules/userManager/providers/providerSelectedUser";
import {
  useDialogActions,
  EDialogActionsActionKind,
} from "@presentation/providers/providerDialogActions";
import EllipseBox from "src/presentation/components/ellipseBox";
import { useUserList } from "@presentation/modules/userManager/providers/providerUserList";
import Box from "@mui/material/Box";

interface TableUserListProps {
  header?: JSX.Element;
}

export function TableUserList({ header }: TableUserListProps) {
  const { loading, users } = useUserList();
  const [hovered, setHovered] = useState<string | null>(null);
  const { handleSelectUser } = useSelectedUser();
  const { dispatch } = useDialogActions();
  const handleHoverSelect = (value: string) => {
    if (hovered === value) return;
    setHovered(value);
  };
  const handleHoverUnSelect = () => {
    if (!hovered) return;
    setHovered(null);
  };
  return (
    <>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "end" }}
        py={2}
      >
        {header}
      </Box>
      <Table>
        <Table.Head>
          <Table.RowHead
            editable={false}
            disabled={false}
            numSelected={0}
            rowCount={0}
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
            isEmpty={!users.length}
            colSpan={HEADER.length + COUNT_ADDITIONAL_COLUMNS}
            message="No Data Found"
          >
            <Table.Body>
              {users.map((item) => {
                const isHovered = hovered === item.id;
                return (
                  <Table.RowBody
                    editable={false}
                    disabled={false}
                    key={item.id}
                    selected={false}
                    onMouseEnter={() => handleHoverSelect(item.id || "")}
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
                      <EllipseBox maxWidth={130} tooltipLabel={item.email}>
                        <Typography variant="body1" component="p" noWrap>
                          {item.email}
                        </Typography>
                      </EllipseBox>
                    </Table.Cell>
                    <Table.Cell>
                      <EllipseBox
                        maxWidth={130}
                        tooltipLabel={item.secondaryEmail}
                      >
                        <Typography variant="body1" component="p" noWrap>
                          {item.secondaryEmail}
                        </Typography>
                      </EllipseBox>
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
                      <EllipseBox
                        maxWidth={160}
                        tooltipLabel={item.role.description}
                      >
                        <Typography variant="body1" component="p" noWrap>
                          {item.role.name}
                        </Typography>
                      </EllipseBox>
                    </Table.Cell>
                    <Table.Cell>
                      <Fade in={isHovered}>
                        <Stack
                          direction="row"
                          alignItems="flex-end"
                          spacing={1}
                        >
                          <Button variant="text" disabled={false}>
                            Delete
                          </Button>
                          <Button
                            disabled={false}
                            variant="contained"
                            onClick={(event) => {
                              event.stopPropagation();
                              handleSelectUser(item);
                              dispatch({
                                type: EDialogActionsActionKind.setOpenEditModal,
                              });
                            }}
                          >
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
    </>
  );
}
