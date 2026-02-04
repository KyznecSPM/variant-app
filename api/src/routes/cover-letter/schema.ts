import { Type, type Static } from '@sinclair/typebox';

export const GenerateCoverLetterBody = Type.Object({
  jobTitle: Type.String({ minLength: 1, maxLength: 200 }),
  company: Type.String({ minLength: 1, maxLength: 200 }),
  skills: Type.String({ minLength: 1, maxLength: 500 }),
  additionalDetails: Type.String({ maxLength: 1000, default: '' }),
});

export const GenerateCoverLetterResponse = Type.Object({
  applicationText: Type.String(),
});

export type GenerateCoverLetterBodyType = Static<typeof GenerateCoverLetterBody>;
export type GenerateCoverLetterResponseType = Static<typeof GenerateCoverLetterResponse>;

export const generateCoverLetterSchema = {
  body: GenerateCoverLetterBody,
  response: {
    200: GenerateCoverLetterResponse,
  },
};
