import React from "react";
import App from "../src/components/App";
import express from "express";
import ReactDOMServer from "react-dom/server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 9000;

app.use(express.static(path.resolve(__dirname, "../dist/public")));

app.get("*", (_req, res) => {
  const content = ReactDOMServer.renderToString(<App />);

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Express SSR!!!</title>
        <meta charset="utf-8">
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`サーバーが${port}番ポートで起動しました`);
});
