import http from "http";
import products from "./data/products.js";
const server = http.createServer((req, res) => {
  //   res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  //   res.write("<h1>Hello World!</h1>");
  res.end(JSON.stringify(products));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`SERVER Running on PORT ${PORT}`);
});
