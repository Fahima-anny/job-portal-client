import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";

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
      ]
    },
  ]);

  export default router