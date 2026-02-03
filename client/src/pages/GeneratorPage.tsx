import { ApplicationForm } from '../components/ApplicationForm';
import { GeneratorPageLayout } from '../components/GeneratorPageLayout';
import { Viewer } from '../components/Viewer';

export const GeneratorPage = () => {
  return (
    <GeneratorPageLayout>
      <ApplicationForm />
      <Viewer />
    </GeneratorPageLayout>
  );
};
