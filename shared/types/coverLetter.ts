export interface GenerateCoverLetterRequest {
  jobTitle: string;
  company: string;
  skills: string;
  additionalDetails: string;
}

export interface GenerateCoverLetterResponse {
  applicationText: string;
}
