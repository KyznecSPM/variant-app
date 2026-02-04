import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { generateCoverLetter } from '../../../api';
import { useCoverLetters, useCoverLettersActions } from '../../../providers';
import { defaultValues } from '../constants';
import type { ApplicationFormData } from '../types';

export const useApplicationForm = () => {
  const [error, setError] = useState<string | null>(null);

  const methods = useForm<ApplicationFormData>({
    mode: 'onChange',
    defaultValues,
  });

  const { addLetter, clearSelectedLetter, setIsGenerating } =
    useCoverLettersActions();
  const { isCompleted, selectedLetterId, isGenerating } = useCoverLetters();

  useEffect(() => {
    return () => {
      clearSelectedLetter();
    };
  }, [clearSelectedLetter]);

  const onSubmit = useCallback(
    async (data: ApplicationFormData) => {
      if (isCompleted || isGenerating) return;

      setIsGenerating(true);
      setError(null);

      try {
        const response = await generateCoverLetter(data);
        addLetter({ id: uuidv4(), applicationText: response.applicationText });
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : 'Failed to generate cover letter';
        setError(message);
        console.error('Cover letter generation error:', err);
      } finally {
        setIsGenerating(false);
      }
    },
    [isCompleted, isGenerating, addLetter, setIsGenerating]
  );

  return {
    methods,
    onSubmit,
    isCompleted,
    selectedLetterId,
    isLoading: isGenerating,
    // TODO: add component for error to the form
    error,
  };
};
