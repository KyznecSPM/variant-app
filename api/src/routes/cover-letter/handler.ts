import type { FastifyReply, FastifyRequest } from 'fastify';

import { generateCoverLetter } from '../../services/openai';
import type { GenerateCoverLetterBodyType, GenerateCoverLetterResponseType } from './schema';

export const generateCoverLetterHandler = async (
  request: FastifyRequest<{ Body: GenerateCoverLetterBodyType }>,
  reply: FastifyReply,
): Promise<GenerateCoverLetterResponseType> => {
  const { jobTitle, company, skills, additionalDetails } = request.body;

  try {
    const applicationText = await generateCoverLetter({
      jobTitle,
      company,
      skills,
      additionalDetails,
    });

    return { applicationText };
  } catch (error) {
    request.log.error(error, 'Failed to generate cover letter');

    return reply.status(500).send({
      error: 'Failed to generate cover letter',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
