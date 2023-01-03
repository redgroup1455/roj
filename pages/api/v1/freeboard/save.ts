import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import formidable from "formidable";
import FormData from "form-data";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    let cookie = req.body.cookie;
    if (!cookie) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }
    const form = new formidable.IncomingForm();
    return new Promise<void>(async (resolve, reject) => {
      form.parse(req, async function (err, fields, files) {
        let title = fields.title;
        let body = fields.body;

        let ct = `application/x-www-form-urlencoded; charset=UTF-8`;
        let ua = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36`;

        var data = new FormData();
        data.append("f_board_title", title);
        data.append("f_board_txt", body);
        data.append("f_id", "");

        axios("https://cogo.co.kr/api/freeboard/save", {
          data: data,
          headers: {
            Cookie: cookie,
            ...data.getHeaders(),
            accept: "application/json, text/javascript, */*; q=0.01",
            "sec-ch-ua": `"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"`,
            "user-agent": ua,
            userAgent: ua,
            contentType: ct,
            "content-type": ct,
          },
          method: "POST",
        })
          .then((upload) => {
            res.send(upload.data);
            resolve();
          })
          .catch((e) => {
            res.send(e.data);
            resolve();
          });
      });
    });
  }
  res.redirect("/404");
}
