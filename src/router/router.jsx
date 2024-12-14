import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "../context/PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <p className="min-h-screen flex justify-center items-center text-5xl text-red-600 font-bold">Page Not Found</p>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/signIn',
            element: <SignIn></SignIn>
        },
        {
            path: '/jobs/:id',
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path: '/jobApply/:id',
            element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
            // loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
      ]
    },
  ]);

  export default router