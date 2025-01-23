import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { env } from "@/env";

const server = fastify();

server.register(fastifyCors, { origin: "*" })

console.log(env.DATABASE_URL)

server.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('HTTP server is running!');
})