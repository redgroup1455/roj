/* eslint-disable @next/next/no-img-element */

import { Text, Button, Image, Grid, Navbar } from "@nextui-org/react";
import Link from "next/link";
import NoSSR from "react-no-ssr";

export default function CustomNavbar() {
  return (
    <>
      <Navbar isBordered height="48px" variant="sticky">
        <Navbar.Brand>
          <Text color="inherit" hideIn="xs">
            <Link href="/">
              <NoSSR>
                <Grid.Container>
                  <Grid>
                    <img
                      src="/logo.png"
                      alt="LOGO"
                      height="48px"
                      style={{
                        marginRight: "8px",
                        paddingTop: "10px",
                        zIndex: "3000000",
                        position: "relative",
                      }}
                    ></img>
                  </Grid>
                  <Grid>
                    <strong
                      style={{
                        fontSize: "2rem",
                        color: "#123456",
                      }}
                    >
                      GROUP
                    </strong>
                  </Grid>
                </Grid.Container>
              </NoSSR>
            </Link>
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          hideIn="xs"
          variant="underline-rounded"
          activeColor="error"
        >
          <Navbar.Link href="#">
            <strong>문제</strong>
          </Navbar.Link>
          <Navbar.Link isActive href="#">
            <strong>랭킹</strong>
          </Navbar.Link>
          <Navbar.Link href="#">
            <strong>상태</strong>
          </Navbar.Link>
          <Navbar.Link href="#">
            <strong>그룹</strong>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            로그인
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#" color="error">
              회원가입
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
  );
}
