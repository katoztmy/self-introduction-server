const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const path = require("path");
const { App } = require("../src/components/App");
const app = express();
const port = 9000;

app.use(express.static(path.resolve(__dirname, "../dist/public")));

app.get("*", (req, res) => {
  const content = ReactDOMServer.renderToString(<App />);

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Express SSR サンプル</title>
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
