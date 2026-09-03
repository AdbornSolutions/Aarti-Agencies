import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CursorProvider } from '../CursorProvider';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Preloader } from '../Preloader';
import { ScrollToTop } from '../navigation/ScrollToTop';

function SiteLayout() {
  const [ready, setReady] = useState(false);
  return (
    <CursorProvider enabled>
      <ScrollToTop />
      <div className="w-full bg-sand">
        <Preloader onComplete={() => setReady(true)} />
        <Header ready={ready} />
        <main>
          <Outlet context={{ ready }} />
        </main>
        <Footer />
      </div>
    </CursorProvider>
  );
}

export { SiteLayout };
