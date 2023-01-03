/* eslint-disable @next/next/no-img-element */

import { Button, Grid } from "@nextui-org/react";
import Link from "next/link";
import DarkMode from "../components/DarkMode";

export default function CustomNavbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100vw",
        height: "fit-content",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Grid.Container>
        <Grid
          xs={1}
          css={{
            justifyContent: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "2rem",
              padding: "auto",
              margin: "none",
            }}
          >
            GOCO
          </div>
        </Grid>
        <Grid xs={9}>
          <Grid.Container>
            <Grid></Grid>
          </Grid.Container>
        </Grid>
        <Grid xs={2}>
          <Grid.Container>
            <Grid xs={2}>
              <div className="vcAlign">
                <DarkMode />
              </div>
            </Grid>
            <Grid xs={4}>
              <Link href="/auth/signin">
                <div className="vcAlign">Sign in</div>
              </Link>
            </Grid>
            <Grid xs={4}>
              <Link href="/auth/signup">
                <Button color="error" auto flat className="vcAlign">
                  <div>Sign up</div>
                </Button>
              </Link>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </div>
  );
}
