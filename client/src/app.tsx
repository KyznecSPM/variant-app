import 'normalize.css';
import './assets/fonts/fonts.css';
import './styles/tokens.css';
import './styles/base.css';

import { AppLayout } from './components/AppLayout';
import { Header } from './components/Header';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { CoverLettersProvider } from './providers';

export const App = () => {
  return (
    <CoverLettersProvider>
      <AppLayout>
        <Header />
        <ApplicationsPage />
      </AppLayout>
    </CoverLettersProvider>
  );
};
