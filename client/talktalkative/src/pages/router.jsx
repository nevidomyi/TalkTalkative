import { createBrowserRouter } from "react-router-dom";
import Chat from "../components/Chat/Chat";
import Home from "../components/Home";
import Login from "../components/User/Login";
import Signup from "../components/User/Signup";
import UserPage from "../components/User/UserPage";
import UserPageEdit from "../components/User/UserPageEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  // {
  //   path: "/chat",
  //   element: <Chat />,
  // },
  // {
  //   path: "/user",
  //   element: <UserPage />,
  // },
  {
    path: "/user/profile",
    element: <UserPage />,
  },
  {
    path: "/user/edit",
    element: <UserPageEdit />,
  },
]);

export default router;
