import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Dashboard, Login, Register, Profile, Patients } from '../pages/index';


export const Routes = () => {
    return useRoutes([
        {
            path: '/',
            element: < Dashboard />
        },
        {
            path: '/auth/login',
            element: < Login />
        },
        {
            path: '/auth/register',
            element: < Register />
        },
        {
            path: '/profile',
            element: < Profile />
        },
        {
            path: '/patient',
            element: < Patients />
        }
    ]);
};
