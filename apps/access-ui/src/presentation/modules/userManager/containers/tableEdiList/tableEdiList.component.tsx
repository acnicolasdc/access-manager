import Table from "../../../../components/table";

import { COUNT_ADDITIONAL_COLUMNS, HEADER } from "./tableEdiList.constants";

export function TableEdiList() {
  const loading = false;
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
          <Table.Body></Table.Body>
        </Table.IfIsEmpty>
      )}
    </Table>
  );
}
