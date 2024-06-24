// redis is a software which is used as a message broker 



import Redis from "ioredis";

import ServerConfig from './serverconfig';

const redisConfig = {
    port:ServerConfig.REDIS_PORT,
    host: ServerConfig.REDIS_HOST,
    maxRetriesPerRequest: null
};

const redisConnection = new Redis(redisConfig);

export default redisConnection;