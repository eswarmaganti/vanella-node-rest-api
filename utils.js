import { rejects } from "assert";
import fs from "fs";
import { resolve } from "path";

const writeDataToFile = (filename, data) => {
  fs.writeFileSync(filename, "export default", "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
  fs.appendFileSync(filename, JSON.stringify(data), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
};

export const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {}
  });
};
export default writeDataToFile;
