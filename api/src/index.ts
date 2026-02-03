import 'dotenv/config';
import fastify from 'fastify';

const port = parseInt(process.env.PORT || '8080', 10);
const isDev = process.env.NODE_ENV !== 'production';
const host = isDev ? 'localhost' : '0.0.0.0';

const server = fastify();

if (isDev) {
  server.log.info('Running in development mode');
}

// Graceful shutdown handler
const gracefulShutdown = async (signal: string) => {
  console.log(`Received ${signal}. Starting graceful shutdown...`);

  try {
    // Close Fastify server
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
    // await server.register(metricsRoutes, { prefix: '/metrics' });

    await server.listen({ port, host });
    console.log(`Server listening at http://${host}:${port}`);
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

void startServer();
