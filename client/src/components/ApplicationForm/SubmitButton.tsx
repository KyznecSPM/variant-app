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
    if (isLoading) return 'Generating...';
    if (regenerationMode) return 'Try Again';
    return 'Generate Now';
  };

  return (
    <Button
      type="submit"
      size="lg"
      disabled={!isValid || isCompleted || isLoading}
      variant={regenerationMode ? 'secondary' : 'primary'}
      icon={regenerationMode && !isLoading ? 'repeat' : undefined}
      iconPosition="left"
    >
      {getButtonText()}
    </Button>
  );
};
