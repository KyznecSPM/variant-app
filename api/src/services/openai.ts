import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MODEL = 'gpt-4o-mini';
const MAX_TOKENS = 800;
const TEMPERATURE = 0.7;

const SYSTEM_PROMPT = `You are a professional cover letter writer.
Generate a concise, professional cover letter in plain text format.
The letter should be personalized, engaging, and under 2000 characters.
Write in a professional yet approachable tone.
Do not use markdown formatting, headers, or bullet points.
Write as a continuous letter with proper paragraphs.`;

interface CoverLetterInput {
  jobTitle: string;
  company: string;
  skills: string;
  additionalDetails: string;
}

const buildUserPrompt = (input: CoverLetterInput): string => {
  const parts = [
    `Job Title: ${input.jobTitle}`,
    `Company: ${input.company}`,
    `Key Skills: ${input.skills}`,
  ];

  if (input.additionalDetails.trim()) {
    parts.push(`Additional Context: ${input.additionalDetails}`);
  }

  return parts.join('\n');
};

export const generateCoverLetter = async (input: CoverLetterInput): Promise<string> => {
  const userPrompt = buildUserPrompt(input);

  const completion = await openai.chat.completions.create({
    model: MODEL,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: userPrompt },
    ],
    max_tokens: MAX_TOKENS,
    temperature: TEMPERATURE,
  });

  const content = completion.choices[0]?.message?.content;

  if (!content) {
    throw new Error('Failed to generate cover letter: empty response');
  }

  return content.trim();
};
