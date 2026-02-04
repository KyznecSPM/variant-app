import cors from '@fastify/cors';
import type { FastifyInstance } from 'fastify';

const isDev = process.env.NODE_ENV !== 'production';

const getAllowedOrigins = (): (string | RegExp)[] => {
  const origins: (string | RegExp)[] = [];

  const prodDomain = process.env.ALLOWED_ORIGIN;
  if (prodDomain) {
    origins.push(prodDomain);
  }

  origins.push(/^https:\/\/.*\.vercel\.app$/);

  if (isDev) {
    origins.push('http://localhost:5173');
    origins.push('http://localhost:3000');
  }

  return origins;
};

export const registerCors = async (server: FastifyInstance): Promise<void> => {
  await server.register(cors, {
    origin: getAllowedOrigins(),
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
};
