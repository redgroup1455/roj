/* eslint-disable @next/next/no-img-element */

import { Container, Row, Col, Text } from "@nextui-org/react";
import Link from "next/link";
import NoSSR from "react-no-ssr";

export default function CustomNavbar() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      width: "100vw",
      height: "48px",
      borderBottom: "1px solid #ccc"
    }}>
      <Container>
        <Row>
          <Col>
            <Text>
              GOCO
            </Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
