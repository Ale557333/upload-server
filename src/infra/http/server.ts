import { env } from '@/env'
import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'

const server = fastify()

server.register(fastifyCors, { origin: '*' })

console.log(env.DATABASE_URL)
server.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('HTTP Server running!')
})