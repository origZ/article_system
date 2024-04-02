import Login from "@/view/login";
import User from "@/view/user";

export const route = [
  {
    path: '/',
    element: <User/>
  },
  {
    path: '/login',
    element: <Login/>
  },
]