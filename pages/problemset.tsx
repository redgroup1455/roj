import CustomNavbar from "../components/Navbar";
import { Checkbox, Input, Row, Text, Button, Table } from "@nextui-org/react";

export default function problemset() {
  return (
    <div>
      <CustomNavbar />
      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column>번호</Table.Column>
          <Table.Column>문제</Table.Column>
          <Table.Column>난이도</Table.Column>
        </Table.Header>
      </Table>
    </div>
  );
}
