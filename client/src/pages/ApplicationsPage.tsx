import { ApplicationsList } from '../components/ApplicationsList';
import { ApplicationsPageLayout } from '../components/ApplicationsPageLayout';
import { GoalBanner } from '../components/GoalBanner';
import { TopBar } from '../components/TopBar';
import { APPLICATIONS_MAX_COUNT } from '../constants';
import { useCoverLetters } from '../providers';
export const ApplicationsPage = () => {
  const letters = useCoverLetters();
  const count = letters.length;
  const isCompleted = count === APPLICATIONS_MAX_COUNT;

  return (
    <ApplicationsPageLayout>
      <TopBar />
      <ApplicationsList />
      {!isCompleted && <GoalBanner />}
    </ApplicationsPageLayout>
  );
};
