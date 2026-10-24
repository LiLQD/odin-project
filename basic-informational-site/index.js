import http from "node:http";

const BASE = "localhost";
const PORT = 8080;

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ data: "Hello World" }));
  })
  .listen(PORT, () => {
    console.log("Server running at " + PORT);
  });

http.get(`http://${BASE}:${PORT}`, (res) => {
  const { statusCode } = res;
  const contentType = res.headers["content-type"];

  let error;

  if (statusCode !== 200)
    error = new Error("Request Failed.\n" + "Status Code: " + statusCode);
  else if (!/^application\/json/.test(contentType)) {
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
});
