import { Checkbox, Input, Row, Text, Button } from "@nextui-org/react";
import { useState } from "react";

export default function Signin() {
  let [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg)",
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backdropFilter: "saturate(180%) blur(20px)",
          boxShadow: "30px 30px 5px 20px #F2F2F2",
        }}
      >
        <div
          style={{
            border: "0px solid",
            background: "white",
            padding: "20px",
            paddingBottom: "20px",
            borderRadius: "15px",
            width: "min(400px,100vw)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            position: "fixed",
          }}
        >
          <div
            style={{
              textAlign: "center",

              padding: "15px",
              paddingTop: "0px",
            }}
          >
            <Text size="$xl">
              Welcome to <Text b>ROJ</Text>
            </Text>
          </div>
          <Input
            clearable
            bordered
            fullWidth
            color="error"
            size="lg"
            labelLeft="Username"
            css={{
              marginBottom: "10px",
            }}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="error"
            size="lg"
            labelLeft="Password"
            css={{
              marginBottom: "3px",
            }}
            type="password"
          />
          <div
            style={{
              color: "var(--nextui-colors-error)",
              transition: "all .3s ease",
              maxHeight:
                errorMessage.length == 0 ? "0px" : "var(--nextui-fontSizes-xl)",
              opacity: errorMessage.length == 0 ? "0" : "1",
              marginBottom: "6px",
            }}
          >
            {errorMessage}
          </div>
          <Row justify="space-between">
            <div
              style={{
                transform: "translateY(25%)",
                top: "50%",
                display: "relative",
              }}
            >
              <Checkbox color="error">
                <Text b size={14}>
                  Remember me
                </Text>
              </Checkbox>
            </div>
            <Button
              auto
              color="error"
              onClick={() => {
                setErrorMessage("Sign in is not available in this version.");
              }}
            >
              Sign in
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
}
