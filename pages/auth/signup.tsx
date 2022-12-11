import { Checkbox, Input, Row, Text, Button, Modal } from "@nextui-org/react";
import { useState } from "react";
import ModalPolicy from "../../components/ModalPolicy";

export default function Signin() {
  let [policyOpened, setPolicyOpened] = useState<boolean>(false);
  let [policyAccepted, setPolicyAccepted] = useState<boolean>(false);

  let [errorMessage, setErrorMessage] = useState<string>("");
  let [acceptBtnEnalbed, setAcceptBtnEnalbed] = useState<boolean>(false);

  let [username, setUsername] = useState<string>("");
  let [password, setPassword] = useState<string>("");

  return (
    <div
      style={{
        backgroundImage:
          "url(https://cdn.discordapp.com/attachments/1051010334707691572/1051130577669062696/4ea1221c-78f0-4952-a3c6-f16acb33b57f.png)",
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Modal
        open={policyOpened}
        onClose={() => {
          setPolicyOpened(false);
        }}
        onOpen={() => {
          setAcceptBtnEnalbed(false);
        }}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            이용약관
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              overflowY: "auto",
              maxHeight: "40vh",
            }}
            onScroll={(e) => {
              let thid = e.target as HTMLDivElement;
              if (thid.scrollTop > 900) {
                setAcceptBtnEnalbed(true);
              }
            }}
          >
            <ModalPolicy />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            color="error"
            onClick={() => {
              setPolicyOpened(false);
              setPolicyAccepted(false);
            }}
          >
            미동의
          </Button>
          <Button
            auto
            color="success"
            onClick={() => {
              setPolicyOpened(false);
              setPolicyAccepted(true);
            }}
            disabled={!acceptBtnEnalbed}
          >
            동의
          </Button>
        </Modal.Footer>
      </Modal>
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
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <div
            style={{
              transition: "all .3s ease",
              height: "0px",
            }}
          >
            <div
              style={{
                color: "var(--nextui-colors-error)",
                transition: "all .3s ease",
                maxHeight:
                  errorMessage.length == 0
                    ? "var(--nextui-fontSizes-xl)"
                    : "0px",
              }}
            >
              {errorMessage}
            </div>
          </div>
          <Input
            clearable
            bordered
            fullWidth
            color="error"
            size="lg"
            labelLeft="Password"
            css={{
              marginTop: "10px",
              marginBottom: "15px",
            }}
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            helperText={
              password.length < 8 && password.length > 0
                ? "Password must be at least 8 characters"
                : ""
            }
          />
          <Row justify="space-between">
            <div
              style={{
                transform: "translateY(25%)",
                top: "50%",

                display: "relative",
              }}
            >
              <Checkbox
                color="error"
                isSelected={policyAccepted}
                onChange={() => {
                  if (policyAccepted == true && policyOpened == false) {
                    setPolicyOpened(false);
                    setPolicyAccepted(false);
                    return;
                  }
                  setPolicyOpened(true);
                  setPolicyAccepted(false);
                }}
              >
                <Text b size={14} style={{ padding: "5px" }}>
                  이용약관에 동의합니다.
                </Text>
              </Checkbox>
            </div>
            <Button
              auto
              color="error"
              disabled={
                !policyAccepted || username.length == 0 || password.length < 8
              }
            >
              Next
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
}
