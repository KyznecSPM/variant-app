import 'normalize.css';
import './assets/fonts/fonts.css';
import './styles/tokens.css';
import './styles/base.css';

import { Route, Routes } from 'react-router';

import { Header } from './components/Header';
import { ROUTES } from './constants';
import { AppLayout } from './layouts';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { GeneratorPage } from './pages/GeneratorPage';
import { CoverLettersProvider } from './providers';

export const App = () => {
  return (
    <CoverLettersProvider>
      <AppLayout>
        <Header />
        <Routes>
          <Route path={ROUTES.APPLICATIONS} element={<ApplicationsPage />} />
          <Route path={ROUTES.GENERATE} element={<GeneratorPage />} />
        </Routes>
      </AppLayout>
    </CoverLettersProvider>
  );
};
