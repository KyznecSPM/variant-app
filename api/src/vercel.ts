import type { VercelRequest, VercelResponse } from '@vercel/node';

import { buildApp } from './app';

let app: Awaited<ReturnType<typeof buildApp>> | null = null;

const getApp = async () => {
  if (!app) {
    app = await buildApp();
    await app.ready();
  }
  return app;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const fastifyApp = await getApp();

  await fastifyApp.ready();
  fastifyApp.server.emit('request', req, res);
}
