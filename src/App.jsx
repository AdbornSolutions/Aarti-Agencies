import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { AboutPage } from './pages/AboutPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProjectsPage } from './pages/ProjectsPage';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="collections" element={<CollectionsPage />} />
        <Route path="applications" element={<ApplicationsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export { App };
