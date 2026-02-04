import type { FastifyInstance } from 'fastify';

import { generateCoverLetterHandler } from './handler';
import { generateCoverLetterSchema } from './schema';

export const coverLetterRoutes = async (server: FastifyInstance): Promise<void> => {
  server.post('/generate', {
    schema: generateCoverLetterSchema,
    handler: generateCoverLetterHandler,
  });
};
