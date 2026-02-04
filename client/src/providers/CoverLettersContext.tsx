import { createContext, useContext } from 'react';

export type CoverLetter = {
  id: string;
  applicationText: string;
};

interface CoverLettersState {
  letters: CoverLetter[];
  selectedLetterId: string | null;
  isCompleted: boolean;
  count: number;
}

const defaultState: CoverLettersState = {
  letters: [],
  selectedLetterId: null,
  isCompleted: false,
  count: 0,
};

export const CoverLettersStateContext =
  createContext<CoverLettersState>(defaultState);

type CoverLettersActions = {
  addLetter: (letter: CoverLetter) => void;
  removeLetter: (id: string) => void;
  clearSelectedLetter: () => void;
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
