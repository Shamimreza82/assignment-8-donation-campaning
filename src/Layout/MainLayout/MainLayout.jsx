import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const MainLayout = () => {
    return (
        <div className='max-w-7xl m-auto px-3 lg:px-0 md:px-0'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;