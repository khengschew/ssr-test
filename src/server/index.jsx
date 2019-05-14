import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../shared/components/app';

const app = express();
const port = 3000;

const htmlTemplate = reactDom => (`
  <!DOCTYPE html>
  <html>
    <head>
      <title>SSR Test</title>
      <script src="bundle.js" defer></script>
    </head>
    <body>
      <div id="app">${reactDom}</div>
    </body>
  </html>
`);

app.use(express.static(path.join('public')));

app.use('/*', (req, res) => {
  const jsx = (<App />);
  const reactDom = renderToString(jsx);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDom));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
