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
    const ac = req.body.ac;
    const na = req.body.na;
    const em = req.body.em;
    const ph = req.body.ph;
    const de = req.body.de;

    if (!id) {
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

    if (!ac) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }

    if (!na) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }

    if (!em) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }

    if (!ph) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }

    if (!de) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }

    return new Promise<void>((resolve, reject) => {
      client({
        method: "post",
        url: "https://cogo.co.kr/api/auth/join",
        headers: {
          "content-type": "multipart/form-data",
        },
        data: {
          email: decodeURI(id as string),
          password: decodeURI(pw as string),
          password_confirm: decodeURI(pw as string),
          mt_division: decodeURI(ac as string),
          name: decodeURI(na as string),
          mt_email: decodeURI(em as string),
          mt_ph: decodeURI(ph as string),
          describes: decodeURI(de as string),
          mt_level: "1",
          agreement: "true",
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
