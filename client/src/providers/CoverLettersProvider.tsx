import type { ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { APPLICATIONS_MAX_COUNT } from '../constants';
import type { CoverLetter } from './CoverLettersContext';
import {
  CoverLettersActionsContext,
  CoverLettersStateContext,
} from './CoverLettersContext';

const localStorageKey = 'coverLetters';

const getLettersFromLocalStorage = () => {
  try {
    const raw = localStorage.getItem(localStorageKey);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveLettersToLocalStorage = (letters: CoverLetter[]) => {
  try {
    localStorage.setItem(localStorageKey, JSON.stringify(letters));
  } catch {
    console.error('Failed to save letters to localStorage');
  }
};

export const CoverLettersProvider = ({ children }: { children: ReactNode }) => {
  const [letters, setLetters] = useState<CoverLetter[]>(() => {
    return getLettersFromLocalStorage();
  });
  const [selectedLetterId, setSelectedLetterId] = useState<string | null>(null);

  const addLetter = useCallback((letter: CoverLetter) => {
    setLetters((prev) => {
      const newLetters = [...prev, letter];
      saveLettersToLocalStorage(newLetters);
      return newLetters;
    });
    setSelectedLetterId(letter.id);
  }, []);

  const removeLetter = useCallback((id: string) => {
    setLetters((prev) => {
      const newLetters = prev.filter((l) => l.id !== id);
      saveLettersToLocalStorage(newLetters);
      return newLetters;
    });
  }, []);

  const clearSelectedLetter = useCallback(() => {
    setSelectedLetterId(null);
  }, []);

  const value = useMemo(() => {
    return {
      letters,
      selectedLetterId,
      isCompleted: letters.length === APPLICATIONS_MAX_COUNT,
      count: letters.length,
    };
  }, [letters, selectedLetterId]);

  const actions = useMemo(
    () => ({ addLetter, removeLetter, clearSelectedLetter }),
    [addLetter, removeLetter, clearSelectedLetter]
  );

  return (
    <CoverLettersStateContext.Provider value={value}>
      <CoverLettersActionsContext.Provider value={actions}>
        {children}
      </CoverLettersActionsContext.Provider>
    </CoverLettersStateContext.Provider>
  );
};
