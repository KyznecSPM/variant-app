import { ApplicationsList } from '../components/ApplicationsList';
import { ApplicationsPageLayout } from '../components/ApplicationsPageLayout';
import { GoalBanner } from '../components/GoalBanner';
import { TopBar } from '../components/TopBar';

export const ApplicationsPage = () => {
  return (
    <ApplicationsPageLayout>
      <TopBar />
      <ApplicationsList />
      <GoalBanner />
    </ApplicationsPageLayout>
  );
};
