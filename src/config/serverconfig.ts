import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || 3000,
  REDIS_PORT:parseInt(process.env.PORT_REDIS || "6379",10),
  REDIS_HOST:process.env.HOST
};
