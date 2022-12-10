import CustomNavbar from "../components/Navbar";
import { Checkbox, Input, Row, Text, Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <CustomNavbar />
      <div
        style={{
          border: "5px solid #e9e9e9",
          background: "#e9e9e9",
          padding: "5px",
          borderRadius: "15px",
          width: "min(800px,100vw)",
          left: "50%",
          top: "15%",
          transform: "translate(-50%,-50%)",
          position: "fixed",
        }}
      >
        <Row justify="center">
          <Text size="$3xl" b color="error">
            R
          </Text>
          <Text size="$2xl">ed group</Text>
          &nbsp;&nbsp;&nbsp;
          <Text size="$3xl" b color="error">
            O
          </Text>
          <Text size="$2xl">nline</Text>
          &nbsp;&nbsp;&nbsp;
          <Text size="$3xl" b color="error">
            J
          </Text>
          <Text size="$2xl">udge</Text>
        </Row>
      </div>
    </div>
  );
}
