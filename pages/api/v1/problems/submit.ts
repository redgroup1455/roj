import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import formidable from "formidable";
import FormData from "form-data";
import cheerio from "cheerio";

let langName: { [key: string]: string } = {
  "1": "c",
  "2": "cpp",
  "3": "java",
  "4": "py2",
  "5": "py3",
  "6": "php7",
  "7": "jsc",
  "8": "go",
  "9": "csharp",
  "10": "ruby",
  "11": "rust",
  "12": "haskell",
  "13": "pascal",
  "14": "plaintext",
  "15": "basic",
  "16": "c11",
  "17": "cpp14",
  "18": "cpp17",
};

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
    const cookie = req.body.cookie;
    const lang = req.body.lang;
    const pid = req.body.pid;

    if (!cookie) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }
    if (!lang) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }
    if (!pid) {
      res.send(
        JSON.stringify({
          e: "Query not found",
        })
      );
      return;
    }
    return new Promise<void>(async (resolve, reject) => {
      const form = new formidable.IncomingForm();
      form.parse(req, async function (err, fields, files) {
        let code = fields.code;
        if (!code) {
          res.send(
            JSON.stringify({
              e: "Body not found",
            })
          );
          resolve();
          return;
        }
        let dtx = await axios.get(`https://cogo.co.kr/problem/${pid}/editor`, {
          headers: {
            Cookie: cookie,
          },
        });
        let checkV = dtx.data as string;
        checkV = checkV.split('check_value: "')[1];
        checkV = checkV.split('",')[0];

        var data = new FormData();

        data.append("pcode", pid);
        data.append("cid", "");
        data.append("vcid", "");
        data.append("lid", "");
        data.append("iid", "");
        data.append("oj", "noj");
        data.append("coid", lang);
        data.append("lang", langName[lang as any as string] as string);
        data.append("solution", code);
        data.append("check_value", checkV);

        let ct = `application/x-www-form-urlencoded; charset=UTF-8`;
        let ua = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36`;

        const $ = cheerio.load(dtx.data);
        let xsrf = $('meta[name="csrf-token"]').attr("content");
        let pidx = dtx.data.split("pid:")[1].split(",")[0];
        data.append("pid", pidx);

        axios({
          method: "post",
          url: "https://cogo.co.kr/ajax/submitSolution",
          headers: {
            "X-CSRF-TOKEN": xsrf,
            Cookie: cookie,
            ...data.getHeaders(),
            accept: "application/json, text/javascript, */*; q=0.01",
            "sec-ch-ua": `"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"`,
            "user-agent": ua,
            userAgent: ua,
            contentType: ct,
            "content-type": ct,
          },
          data: data,
        })
          .then(function (d) {
            res.send({ ...d.data, ...{ xsrf: xsrf } });
            resolve();
            return;
          })
          .catch((e) => {
            res.send(e.data);
            resolve();
            return;
          });
      });
    });
  }

  res.redirect("/404");
}
