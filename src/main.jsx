/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main';
import Home from './pages/Home/Home/Home';
import Menu from './pages/Menu/Menu/Menu';

import { HelmetProvider } from 'react-helmet-async';
import Order from './pages/Order/Order/Order';
import Login from './pages/Login/Login';
import AuthProvider from './Provider/AuthProvider';
import SignUp from './pages/SignUp/SignUp';
import PrivateRoute from './Routes/PrivateRoute';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Layout/Dashboard';
import Cart from './pages/Dashboard/Cart/Cart';
import AllUsers from './pages/Dashboard/Cart/AllUsers/AllUsers';
import AddItems from './pages/Dashboard/AddItems/AddItems';
import AdminRoute from './Routes/AdminRoute';
import ManageItems from './pages/Dashboard/ManageItems/ManageItems';
import UpdateItem from './pages/Dashboard/UpdateItem/UpdateItem';
import Payment from './pages/Dashboard/Payment/Payment';
import PaymentHistory from './pages/Dashboard/PaymentHistory/PaymentHistory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [
      // normal user routes
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path:'PaymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },

      //  admin routes

      {
        path: 'users',
        element:<AdminRoute> <AllUsers></AllUsers></AdminRoute>
      },

      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <UpdateItem></UpdateItem>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      }
    ]
  }
]);

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>

        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
