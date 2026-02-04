import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { useCoverLetters, useCoverLettersActions } from '../../../providers';
import { defaultValues } from '../constants';
import type { ApplicationFormData } from '../types';
import { generateApplicationText } from '../utils';

export const useApplicationForm = () => {
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
    (data: ApplicationFormData) => {
      if (isCompleted) return;

      const applicationText = generateApplicationText(data);
      addLetter({ id: uuidv4(), applicationText });
    },
    [isCompleted, addLetter]
  );

  return {
    methods,
    onSubmit,
    isCompleted,
    selectedLetterId,
  };
};
