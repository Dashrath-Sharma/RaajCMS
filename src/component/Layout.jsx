import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeNav from './HomeNav';

const Layout = () => {
    return (
        <div>
            <HomeNav />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout; 