import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Image, Link, Spacer } from "@nextui-org/react";
import Editor from "@monaco-editor/react";

const options = [
    { value: "cpp", label: "CPP" },
    { value: "js", label: "JavaScript" },
    { value: "py", label: "Python" },
];

export default function ProblemPage() {
    let router = useRouter();
    let [sourceCode, setSourceCode] = useState("");
    let query = router.query;
    return (
        <div>
            <Editor
                height="40vh"
                language="cpp"
                defaultValue={sourceCode}
                onChange={(v) => {
                    setSourceCode(v || "");
                }}
                theme="vs-dark"
            />
            <Button onClick={
                () => {
                    var config = {
                        method: 'post',
                        url: 'http://localhost:3000/api/v1/problems/submit',
                        headers: {},
                        data: {
                            'code': sourceCode,
                            'cookie': localStorage.getItem("cookie"),
                            'lang': '2',
                            'pid': query.idx,
                        }
                    };
                    axios(config)
                        .then(function (response) {
                            console.log(JSON.stringify(response.data));
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }}>제출</Button>
        </div>
    )
}