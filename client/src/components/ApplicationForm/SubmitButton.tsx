import { useFormContext } from 'react-hook-form';

import { Button } from '../Button';

interface SubmitButtonProps {
  isCompleted: boolean;
  regenerationMode: boolean;
}

export const SubmitButton = ({
  isCompleted,
  regenerationMode,
}: SubmitButtonProps) => {
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <Button
      type="submit"
      size="lg"
      disabled={!isValid || isCompleted}
      variant={regenerationMode ? 'secondary' : 'primary'}
      icon={regenerationMode ? 'repeat' : undefined}
      iconPosition="left"
    >
      {regenerationMode ? 'Try Again' : 'Generate Now'}
    </Button>
  );
};
