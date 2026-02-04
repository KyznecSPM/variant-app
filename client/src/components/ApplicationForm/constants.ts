import type { ApplicationFormData } from './types';

export const MOCK_APPLICATION_TEXT = `Dear [Company] Team,

I am writing to express my interest in the [JobTitle] position.

My experience in the realm combined with my skills in [SkillsList] make me a strong candidate for this role.

[AdditionalDetails]

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.`;

export const defaultValues: ApplicationFormData = {
  jobTitle: '',
  company: '',
  skills: '',
  additionalDetails: '',
};
