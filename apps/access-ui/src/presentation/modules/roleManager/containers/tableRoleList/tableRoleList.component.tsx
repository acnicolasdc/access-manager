import { useState } from "react";
import Table from "@presentation/components/table";
import { COUNT_ADDITIONAL_COLUMNS, HEADER } from "./tableRoleList.constants";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Fade from "@mui/material/Fade";
import { useSelectedRole } from "@presentation/modules/roleManager/providers/providerSelectedRole";
import { useRoleList } from "@presentation/modules/roleManager/providers/providerRoleList";
import {
  useDialogActions,
  EDialogActionsActionKind,
} from "@presentation/providers/providerDialogActions";
import EllipseBox from "@presentation/components/ellipseBox";

export function TableRoleList() {
  const { loading, roles } = useRoleList();
  const [hovered, setHovered] = useState<string | null>(null);
  const { handleSelectRole } = useSelectedRole();
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
          isEmpty={false}
          colSpan={HEADER.length + COUNT_ADDITIONAL_COLUMNS}
          message="No Data Found"
        >
          <Table.Body>
            {roles.map((item) => {
              const isHovered = hovered === item.id;
              return (
                <Table.RowBody
                  editable={false}
                  disabled={false}
                  key={item.id}
                  selected={false}
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
                      {item.name}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <Typography variant="body1" component="p">
                      {item.description}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <EllipseBox maxWidth={160} tooltipLabel={item.roleTypeId}>
                      <Typography variant="body1" component="p" noWrap>
                        {item.roleTypeId}
                      </Typography>
                    </EllipseBox>
                  </Table.Cell>
                  <Table.Cell>
                    <Typography variant="body1" component="p" noWrap>
                      {item.roleTypeId}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <Fade in={isHovered}>
                      <Stack direction="row" alignItems="flex-end" spacing={1}>
                        <Button variant="text" disabled={false}>
                          Delete
                        </Button>
                        <Button
                          disabled={false}
                          variant="contained"
                          onClick={(event) => {
                            event.stopPropagation();
                            handleSelectRole(item);
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
  );
}
