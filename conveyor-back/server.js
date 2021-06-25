import express from "express";
import http from "http";

import test from "./api/test.js";

const app = express();

app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(express.json({ limit: "50mb" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  next();
});

// Use Routes
app.use("/api/test", test);

const port = 9000;

const server = http.createServer(app);

server.listen(port, async () => {
  try {
    console.log(`Listening on port ${port}`);
  } catch (error) {
    console.error(`Something went wrong!`, error);
  }
});
