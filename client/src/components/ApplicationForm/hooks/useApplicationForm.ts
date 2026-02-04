import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { generateCoverLetter } from '../../../api';
import { useCoverLetters, useCoverLettersActions } from '../../../providers';
import { defaultValues } from '../constants';
import type { ApplicationFormData } from '../types';

export const useApplicationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const methods = useForm<ApplicationFormData>({
    mode: 'onChange',
    defaultValues,
  });

  const { addLetter, clearSelectedLetter } = useCoverLettersActions();
  const { isCompleted, selectedLetterId } = useCoverLetters();

  useEffect(() => {
    return () => {
      clearSelectedLetter();
    };
  }, [clearSelectedLetter]);

  const onSubmit = useCallback(
    async (data: ApplicationFormData) => {
      if (isCompleted || isLoading) return;

      setIsLoading(true);
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
        setIsLoading(false);
      }
    },
    [isCompleted, isLoading, addLetter]
  );

  return {
    methods,
    onSubmit,
    isCompleted,
    selectedLetterId,
    isLoading,
    error,
  };
};
