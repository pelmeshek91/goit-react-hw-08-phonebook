import { AppBar } from 'components/AppBar/AppBar';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <AppBar />

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
