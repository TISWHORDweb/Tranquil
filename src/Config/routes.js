import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Dashboard, Login, Register, Report, Profile, Patients, Home, Contact, About, Service, Employee, Appointment, Medication, Medicine, Department, Allots, Payment, Shift } from '../pages/index';
import ResetPassword from '../pages/auth/Reset/ResetPassword';
import VerifyCode from '../pages/auth/Reset/VerifyCode';
import UpdatePassword from '../pages/auth/Reset/UpdatePassword';
import AdminShiftDetails from '../pages/app/Shift/AdminShiftDetails';
import ConfirmationScreen from '../components/ConfirmationScreen';
import ViewProfile from '../pages/app/Profile/ViewProfile';
import EmployeeShift from '../pages/app/Shift/EmployeeShift';
import DepartmentDetails from '../pages/app/Department/DepartmentDetails';

export const Routes = () => {
    return useRoutes([
        /**
       * WEBSITE
       */
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
            path: '/web/confirmation/:id',
            element: < ConfirmationScreen />
        },
        {
            path: '/app',
            element: < Dashboard />
        },
        /**
       * AUTHENTICATION
       */
        {
            path: '/auth/login',
            element: < Login />
        },
        {
            path: '/auth/register',
            element: < Register />
        },
        {
            path: '/auth/reset',
            element: < ResetPassword />
        },
        {
            path: '/auth/verify',
            element: < VerifyCode />
        },
        {
            path: '/auth/change',
            element: < UpdatePassword />
        },
        /**
         * APPLICATION
         */
        {
            path: '/app/profile',
            element: < Profile />
        },
        {
            path: '/app/profile/view/:types/:id',
            element: < ViewProfile />
        },
        {
            path: '/app/patient',
            element: < Patients />
        },
        {
            path: '/app/shift',
            element: < Shift />
        },
        {
            path: '/app/shift/audit/:id',
            element: < EmployeeShift />
        },
        {
            path: '/app/shift/:id',
            element: < AdminShiftDetails />
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
            path: '/app/department/:id',
            element: < DepartmentDetails />
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
