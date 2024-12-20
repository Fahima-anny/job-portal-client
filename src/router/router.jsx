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
import MyApplications from "../Pages/MyApplications";
import AddAJob from "../Pages/AddAJob.jsx/AddAJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

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
            loader: ({params}) => fetch(`https://job-portal-server-lime-six.vercel.app/jobs/${params.id}`)
        },
        {
            path: '/jobApply/:id',
            element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
            // loader: ({params}) => fetch(`https://job-portal-server-lime-six.vercel.app/jobs/${params.id}`)
        },
        {
            path: '/myApplications',
            element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>,
        },
        {
            path: '/addJob',
            element: <PrivateRoute><AddAJob></AddAJob></PrivateRoute>,
        },
        {
            path: '/myPostedJobs',
            element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
        },
        {
            path: '/viewJobApplication/:jobId',
            element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
            loader: ({params}) => fetch(`https://job-portal-server-lime-six.vercel.app/job-application/jobs/${params.jobId}`)
        },
      ]
    },
  ]);

  export default router