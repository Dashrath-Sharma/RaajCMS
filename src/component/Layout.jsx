import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationMenu from './Navigation/NavigationMenu';

const Layout = () => {
  return (
    <div>
      <NavigationMenu />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
