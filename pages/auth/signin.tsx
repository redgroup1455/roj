import { Input, Row, Text, Button } from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Signin() {
  let [errorMessage, setErrorMessage] = useState<string>("");
  let [username, setUsername] = useState<string>("");
  let [password, setPassword] = useState<string>("");
  const ableToNext = () => {
    return !(username.length == 0 || password.length < 8);
  };
  const router = useRouter();
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
            background: "var(--nextui-colors-background)",
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
              Welcome to <Text b>GOCO</Text>
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
            defaultValue={username}
            onChange={(e) => {
              setUsername(e.target.value);
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
            defaultValue={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div
            style={{
              color: "var(--nextui-colors-error)",
              transition: "all .3s ease",
              maxHeight:
                errorMessage && errorMessage.length == 0
                  ? "0px"
                  : "var(--nextui-fontSizes-xl)",
              opacity: errorMessage && errorMessage.length == 0 ? "0" : "1",
              marginBottom: "6px",
            }}
          >
            {errorMessage}
          </div>
          <Row justify="space-between">
            <div></div>
            <Button
              auto
              color="error"
              onClick={() => {
                if (!ableToNext()) return;
                axios
                  .post(`/api/v1/accounts/signin`, {
                    id: username,
                    pw: password,
                  })
                  .then((res) => {
                    if (
                      res.data.code == null ||
                      (res.data.result && res.data.result == "fail")
                    ) {
                      setErrorMessage(res.data.data);
                    } else {
                      localStorage.setItem("cookie", res.data.code);
                      axios
                        .get("/api/v1/accounts/profile/get", {
                          params: {
                            cookie: res.data.code as string,
                          },
                        })
                        .then((v) => {
                          let profile: {
                            academy: string;
                            compileErrorCount: string;
                            level: string;
                            name: string;
                            rank: string;
                            solvedProblem: string;
                            submittedCount: string;
                          } = v.data;
                          localStorage.setItem("academy", profile.academy);
                          localStorage.setItem(
                            "compileErrorCount",
                            profile.compileErrorCount
                          );
                          localStorage.setItem("level", profile.level);
                          localStorage.setItem("name", profile.name);
                          localStorage.setItem("rank", profile.rank);
                          localStorage.setItem(
                            "solvedProblem",
                            profile.solvedProblem
                          );
                          localStorage.setItem(
                            "submittedCount",
                            profile.solvedProblem
                          );
                          router.push("/");
                        });
                    }
                  });
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
