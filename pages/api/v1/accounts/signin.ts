import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default (async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const jar = new CookieJar();
    const client = wrapper(axios.create({ jar }));
    const id = req.body.id;
    const pw = req.body.pw;

    if (typeof id !== "string") {
      res.end(
        JSON.stringify({
          e: "Query not found",
        })
      );
    }

    if (typeof pw !== "string") {
      res.end(
        JSON.stringify({
          e: "Query not found",
        })
      );
    }

    return new Promise<void>((resolve, reject) => {
      client({
        method: "post",
        url: "https://cogo.co.kr/api/auth/login",
        headers: {
          "content-type": "multipart/form-data",
        },
        data: {
          email: decodeURI(id as string),
          password: decodeURI(pw as string),
        },
      })
        .then((v) => {
          if (v.data.result == "success") {
            res.send({
              ...v.data,
              code: jar.getCookieStringSync("https://cogo.co.kr/"),
            });
            resolve();
            return;
          }
          res.send(v.data);
          resolve();
          return;
        })
        .catch((e) => {
          res.send(e.data);
          resolve();
        });
    });
  }

  res.redirect("/404");
});
