import fastify from 'fastify';

import { registerCors } from './plugins/cors';
import { coverLetterRoutes } from './routes/cover-letter';

const port = parseInt(process.env.PORT || '8080', 10);
const isDev = process.env.NODE_ENV !== 'production';
const host = isDev ? 'localhost' : '0.0.0.0';

const server = fastify({
  logger: isDev,
});

// Graceful shutdown handler
const gracefulShutdown = async (signal: string) => {
  console.log(`Received ${signal}. Starting graceful shutdown...`);

  try {
    await server.close();
    console.log('Server closed');

    process.exit(0);
  } catch (error) {
    console.error('Error during graceful shutdown:', error);
    process.exit(1);
  }
};

// Register signal handlers for graceful shutdown
process.on('SIGTERM', () => void gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => void gracefulShutdown('SIGINT'));

const startServer = async () => {
  try {
    // Register plugins
    await registerCors(server);

    // Register routes
    await server.register(coverLetterRoutes, { prefix: '/api/cover-letter' });

    await server.listen({ port, host });
    console.log(`Server listening at http://${host}:${port}`);
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

void startServer();
