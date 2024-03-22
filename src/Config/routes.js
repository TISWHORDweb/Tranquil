import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Dashboard, Login, Register, Report, Profile, Patients, Home, Contact, About, Service, Employee, Appointment, Medication, Medicine, Department, Allots, Payment } from '../pages/index';

export const Routes = () => {
    return useRoutes([
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
        },
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
            path: '/app/report',
            element: < Report />
        },
        {
            path: '/app/employee',
            element: < Employee />
        },
        {
            path: '/app/appointment',
            element: < Appointment />
        },
        {
            path: '/app/medication',
            element: < Medication />
        },
        {
            path: '/app/medicine',
            element: < Medicine />
        },
        {
            path: '/app/medicine',
            element: < Medicine />
        },
        {
            path: '/app/department',
            element: < Department />
        },
        {
            path: '/app/allots',
            element: < Allots />
        },
        {
            path: '/app/payment',
            element: < Payment />
        },
    ]);
};
