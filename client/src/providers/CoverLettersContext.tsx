import { createContext, useContext } from 'react';

export type CoverLetter = {
  id: string;
  company: string;
  jobTitle: string;
  skills: string;
  additionalDetails: string;
  applicationText: string;
};

export const CoverLettersStateContext = createContext<
  CoverLetter[] | undefined
>(undefined);

type CoverLettersActions = {
  addLetter: (letter: CoverLetter) => void;
  removeLetter: (id: string) => void;
};

export const CoverLettersActionsContext = createContext<
  CoverLettersActions | undefined
>(undefined);

export const useCoverLettersActions = () => {
  const ctx = useContext(CoverLettersActionsContext);
  if (!ctx) {
    throw new Error(
      'useCoverLettersActions must be used within CoverLettersProvider'
    );
  }
  return ctx;
};

export const useCoverLetters = () => {
  const ctx = useContext(CoverLettersStateContext);
  if (!ctx) {
    throw new Error('useCoverLetters must be used within CoverLettersProvider');
  }
  return ctx;
};
