import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default (async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "DELETE") {
    const jar = new CookieJar();
    const client = wrapper(axios.create({ jar }));
    const cookie = req.body.cookie;

    if (!cookie) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }
    return new Promise<void>((resolve, reject) => {
      jar.setCookie(decodeURI(cookie as string), "https://cogo.co.kr/");

      client({
        method: "DELETE",
        url: "https://cogo.co.kr/api/auth/leave-app",
        headers: {},
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
