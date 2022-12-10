import { Checkbox, Input, Row, Text, Button, Modal } from "@nextui-org/react";
import { useState } from "react";

export default function Signin() {
  let [policyOpened, setPolicyOpened] = useState<boolean>(false);
  let [policyAccepted, setPolicyAccepted] = useState<boolean>(false);

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
      <Modal
        open={policyOpened}
        onClose={() => {
          setPolicyOpened(false);
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
          >
            어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수
            도있고 아닐 수 도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수
            도있스브니다. 어쩔 이용 약관일 수 도있고 아닐 수 도있스브니다. 어쩔
            이용 약관일 수 도있고 아닐 수 도있스브니다.
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
            labelPlaceholder="Username"
            css={{
              marginBottom: "35px",
            }}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="error"
            size="lg"
            labelPlaceholder="Password"
            css={{
              marginBottom: "15px",
            }}
            type="password"
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
            <Button auto color="error" disabled={!policyAccepted}>
              Next
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
}
