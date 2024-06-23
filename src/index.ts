

import express, { Express } from "express";

import serverconfig from "./config/serverconfig";
import apirouter from "./routes";

const app: Express = express();


app.use('/api',apirouter);

app.listen(serverconfig.PORT, () => {
  console.log(`Server started at PORT : ${serverconfig.PORT}`)
})
