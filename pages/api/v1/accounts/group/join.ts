import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";
import { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const jar = new CookieJar();
    const client = wrapper(axios.create({ jar }));
    const cookie = req.body.cookie;
    const groupCode = req.body.groupCode;

    if (!cookie) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }
    if (!groupCode) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }
    return new Promise<void>((resolve, reject) => {
      jar.setCookie(decodeURI(cookie as string), "https://cogo.co.kr/");
      var data = new FormData();
      data.append("gcode", groupCode.toString());
      client({
        url: "https://cogo.co.kr/api/group/join-group",
        method: "POST",
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "sec-ch-ua": `Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24`,
        },
        data: data,
      })
        .then((v) => {
          res.send(v.data);
          resolve();
        })
        .catch((e) => {
          res.send(e.data);
          resolve();
        });
    });
  }

  res.redirect("/404");
}
