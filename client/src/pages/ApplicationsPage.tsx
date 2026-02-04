import { ApplicationsList } from '../components/ApplicationsList';
import { GoalBanner } from '../components/GoalBanner';
import { TopBar } from '../components/TopBar';
import { ApplicationsPageLayout } from '../layouts';
import { useCoverLetters } from '../providers';

export const ApplicationsPage = () => {
  const { isCompleted } = useCoverLetters();
  return (
    <ApplicationsPageLayout>
      <TopBar />
      <ApplicationsList />
      {!isCompleted && <GoalBanner />}
    </ApplicationsPageLayout>
  );
};
