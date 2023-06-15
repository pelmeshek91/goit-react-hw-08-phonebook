import { AuthNav } from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigate/Navigate';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
