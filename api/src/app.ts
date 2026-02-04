import fastify from 'fastify';

import { registerCors } from './plugins/cors';
import { coverLetterRoutes } from './routes/cover-letter';

export const buildApp = async () => {
  const isDev = process.env.NODE_ENV !== 'production';

  const app = fastify({
    logger: isDev,
  });

  await registerCors(app);
  await app.register(coverLetterRoutes, { prefix: '/api/cover-letter' });

  return app;
};
