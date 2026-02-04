import { MOCK_APPLICATION_TEXT } from './constants';
import type { ApplicationFormData } from './types';

export const generateApplicationText = (data: ApplicationFormData): string => {
  return MOCK_APPLICATION_TEXT.replace('[JobTitle]', data.jobTitle)
    .replace('[Company]', data.company)
    .replace('[SkillsList]', data.skills)
    .replace('[AdditionalDetails]', data.additionalDetails);
};
