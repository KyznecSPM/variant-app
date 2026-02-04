import { ApplicationForm } from '../components/ApplicationForm';
import { Viewer } from '../components/Viewer';
import { GeneratorPageLayout } from '../layouts';

export const GeneratorPage = () => {
  return (
    <GeneratorPageLayout>
      <ApplicationForm />
      <Viewer />
    </GeneratorPageLayout>
  );
};
