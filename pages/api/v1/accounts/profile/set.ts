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
    const pw = req.body.pw;
    const email = req.body.email;
    const name = req.body.name;
    const ac = req.body.ac;
    const pn = req.body.pn;

    if (!cookie) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }
    if (!pw) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }
    if (!email) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }
    if (!name) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }
    if (!ac) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }
    if (!pn) {
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
      data.append("password", pw.toString());
      data.append("mt_email", email.toString());
      data.append("name", name.toString());
      data.append("mt_division", ac.toString());
      data.append("mt_ph", pn.toString());

      client({
        url: "https://cogo.co.kr/api/user/modify-myinfo",
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "sec-ch-ua": `Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24`,
        },
        method: "POST",
        data: data,
      }).catch((e) => {
        res.send(e.data);
        resolve();
      });
    });
  }

  res.redirect("/404");
}
