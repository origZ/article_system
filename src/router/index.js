import { Navigate, createBrowserRouter } from "react-router-dom";
import React from "react";
import User from "@/view/user";
import Login from "@/view/login";

const Article = React.lazy(() => import('@/view/user/c-view/article'))
const Home = React.lazy(() => import('@/view/user/c-view/home'))
const Publish = React.lazy(() => import('@/view/user/c-view/publish'))

export const route = createBrowserRouter(
  [
    {
      path: '/',
      element: <User/>,
      children:[
        {
          path: '/',
          element: <Navigate to='/home'/>
        },
        {
          path: '/home',
          element: <Home/>
        },
        {
          path: '/article',
          element: <Article/>
        },
        {
          path: '/publish',
          element: <Publish/>
        },
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
  ]
)