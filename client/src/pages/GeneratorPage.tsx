import { ApplicationForm } from '../components/ApplicationForm';
import { GeneratorPageLayout } from '../components/GeneratorPageLayout';
import { MarkdownViewer } from '../components/MarkdownViewer';

export const GeneratorPage = () => {
  return (
    <GeneratorPageLayout>
      <ApplicationForm />
      <MarkdownViewer />
    </GeneratorPageLayout>
  );
};
