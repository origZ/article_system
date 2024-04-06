import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "@/view/login";
import User from "@/view/user";
import Article from "@/view/user/c-view/article";
import Home from "@/view/user/c-view/home";
import Publish from "@/view/user/c-view/publish";

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