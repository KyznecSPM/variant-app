import { useFormContext } from 'react-hook-form';

import { Button } from '../Button';

interface SubmitButtonProps {
  isCompleted: boolean;
  selectedLetterId: string | null;
}

export const SubmitButton = ({
  isCompleted,
  selectedLetterId,
}: SubmitButtonProps) => {
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <Button
      type="submit"
      size="lg"
      disabled={!isValid || isCompleted}
      variant={selectedLetterId ? 'secondary' : 'primary'}
      icon={selectedLetterId ? 'repeat' : undefined}
      iconPosition="left"
    >
      {selectedLetterId ? 'Try Again' : 'Generate Now'}
    </Button>
  );
};
