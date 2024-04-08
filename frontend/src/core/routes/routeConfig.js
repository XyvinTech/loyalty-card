import React from "react"
import { Navigate } from "react-router-dom"
import Login from "../../pages/login"
import DashboardLayout from "../../layout/dashboardLayout"
import Error404 from "../../pages/404"
import Transaction from "../../pages/transaction"

export const RoutesConfig = () => {

    return [
        {
            path: '/',
            element: <Navigate to='/login' replace />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'transaction',
                    element: <Transaction/>,
                },
                {
                    path: '*',
                    element: <Error404/>,
                }
            ]
        }
    ]
}