import type {
  GenerateCoverLetterRequest,
  GenerateCoverLetterResponse,
} from '@shared/types';

export const generateCoverLetter = async (
  data: GenerateCoverLetterRequest
): Promise<GenerateCoverLetterResponse> => {
  const response = await fetch('/api/cover-letter/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      error.message || `Failed to generate cover letter: ${response.status}`
    );
  }

  return response.json();
};
