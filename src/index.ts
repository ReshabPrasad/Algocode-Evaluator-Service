

import express, { Express } from "express";

import serverconfig from "./config/serverconfig";

const app: Express = express();

app.listen(serverconfig.PORT, () => {
  console.log(`Server started at PORT : ${serverconfig.PORT}`)
})
