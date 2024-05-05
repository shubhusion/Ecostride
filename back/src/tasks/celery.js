// const celery = require('celery');
// const redis = require('redis');

// // Create a Redis client
// const redisClient = redis.createClient();

// const app = celery.Celery('Ecostride', {
//   broker: `redis://${redisClient.host}:${redisClient.port}/0`,
//   backend: 'redis://',
// });

// module.exports = app;