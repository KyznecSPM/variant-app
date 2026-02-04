import { useFormContext } from 'react-hook-form';

import { Button } from '../Button';

interface SubmitButtonProps {
  isCompleted: boolean;
  regenerationMode: boolean;
  isLoading: boolean;
}

export const SubmitButton = ({
  isCompleted,
  regenerationMode,
  isLoading,
}: SubmitButtonProps) => {
  const {
    formState: { isValid },
  } = useFormContext();

  const getButtonText = () => {
    if (isLoading) return '';
    if (regenerationMode) return 'Try Again';
    return 'Generate Now';
  };

  return (
    <Button
      type="submit"
      size="lg"
      disabled={!isValid || isCompleted || isLoading}
      variant={regenerationMode ? 'secondary' : 'primary'}
      icon={isLoading ? 'loading' : regenerationMode ? 'repeat' : undefined}
      iconPosition="left"
      isLoading={isLoading}
    >
      {getButtonText()}
    </Button>
  );
};
