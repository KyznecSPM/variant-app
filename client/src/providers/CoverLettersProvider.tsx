import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    saveLettersToLocalStorage(letters);
  }, [letters]);

  const addLetter = (letter: CoverLetter) => {
    setLetters((prev) => [...prev, letter]);
  };

  const removeLetter = (id: string) => {
    setLetters((prev) => prev.filter((l) => l.id !== id));
  };

  return (
    <CoverLettersStateContext.Provider value={letters}>
      <CoverLettersActionsContext.Provider value={{ addLetter, removeLetter }}>
        {children}
      </CoverLettersActionsContext.Provider>
    </CoverLettersStateContext.Provider>
  );
};
