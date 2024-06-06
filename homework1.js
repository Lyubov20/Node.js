const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

let counter1 = 0;
let counter2 = 0;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    counter1++;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <h1>Homepage</h1>
      <p>Number Of views: ${counter1}</p>
      <a href="/about">Go to page 'About'</a>
    `);
  } else if (req.url === "/about") {
    counter2++;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <h1>Page 'About'</h1>
      <p>Number Of views: ${counter2}</p>
      <a href="/">Go to home page</a>
    `);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Address http://${hostname}:${port}/`);
});
