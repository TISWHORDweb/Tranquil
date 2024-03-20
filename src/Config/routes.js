import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Dashboard, Login, Register, Profile, Patients, Home, Contact, About, Service } from '../pages/index';


export const Routes = () => {
    return useRoutes([
        {
            path: '/app',
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
            path: '/app/profile',
            element: < Profile />
        },
        {
            path: '/app/patient',
            element: < Patients />
        },
        {
            path: '/',
            element: < Home />
        },
        {
            path: '/web',
            element: < Home />
        },
        {
            path: '/web/contact',
            element: < Contact />
        },
        {
            path: '/web/about',
            element: < About />
        },
        {
            path: '/web/service',
            element: < Service />
        }
    ]);
};
