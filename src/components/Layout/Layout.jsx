import { AuthNav } from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigate/Navigate';

import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header>{isLoggedIn ? <Navigation /> : <AuthNav />}</header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Layout;
