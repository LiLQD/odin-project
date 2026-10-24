import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const BASE = "localhost";
const PORT = 8080;

const server = http
  .createServer((req, res) => {
    let filePath;
    const currentPath = process.cwd();
    const reqURL = req.url;
    if (reqURL === "/" || reqURL === "/index.html")
      filePath = path.join(currentPath, "index.html");
    else if (reqURL === "/about")
      filePath = path.join(currentPath, "about.html");
    else if (reqURL === "/contact-me")
      filePath = path.join(currentPath, "/contact-me.html");
    else filePath = path.join(currentPath, "404.html");

    fs.readFile(filePath, "utf8", (err, content) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error: Missing file");
      }
      const statusCode =
        reqURL === "/" ||
        reqURL === "/index.html" ||
        reqURL === "/about" ||
        reqURL === "/contect-me"
          ? 200
          : 404;

      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.end(content);
    });
  })
  .listen(PORT, () => {
    console.log("Server running at " + BASE + ":" + PORT);
  });

http.get(`http://${BASE}:${PORT}`, (res) => {
  const { statusCode } = res;
  const contentType = res.headers["content-type"];

  let error;

  if (statusCode !== 200) {
    error = new Error("Request Failed.\n" + "Status Code: " + statusCode);
    return;
  } else if (!/^text\/html/.test(contentType)) {
    error = new Error(
      "Invalid content type\n" +
        `Expected application/json but received ${contentType}`,
    );
  }
  if (error) {
    console.error(error.message);
    res.resume();
    return;
  }
  console.log("Test successful");
});
