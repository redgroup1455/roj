import CustomNavbar from "../components/Navbar";
import { Row, Text } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <CustomNavbar />
      <div
        style={{
          border: "var(--nextui-colors-errorLight)",
          background: "var(--nextui-colors-errorLight)",
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
            G
          </Text>
          <Text size="$2xl">oco</Text>
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
