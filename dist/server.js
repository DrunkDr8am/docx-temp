"use strict";
const fastify = require('fastify')({ logger: true, bodyLimit: 30 * 1024 * 1024 });
require('dotenv').config();
fastify.register(require('./root/postData'));
fastify.get('/', async (request, reply) => {
    return "Here is docx-template";
});
const start = async () => {
    try {
        fastify.listen({ host: '0.0.0.0', port: process.env.PORT });
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
