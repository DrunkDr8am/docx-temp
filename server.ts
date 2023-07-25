const fastify = require('fastify')({ logger: true })
require('dotenv').config();

fastify.register(require('./root/postData'))

fastify.get('/', async (request: any, reply: any) => {
    return "Here will be docx-template"
})


const start = async () => {
    try {
        await fastify.listen({ host: '0.0.0.0', port: 4000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()