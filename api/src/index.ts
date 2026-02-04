import { buildApp } from './app';

const port = parseInt(process.env.PORT || '8080', 10);
const isDev = process.env.NODE_ENV !== 'production';
const host = isDev ? 'localhost' : '0.0.0.0';

const gracefulShutdown = async (signal: string, server: Awaited<ReturnType<typeof buildApp>>) => {
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

const startServer = async () => {
  try {
    const server = await buildApp();

    process.on('SIGTERM', () => void gracefulShutdown('SIGTERM', server));
    process.on('SIGINT', () => void gracefulShutdown('SIGINT', server));

    await server.listen({ port, host });
    console.log(`Server listening at http://${host}:${port}`);
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

void startServer();
