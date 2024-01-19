import { Profile } from "../../../pages/Profile";
import { Post } from "../../../pages/Post";
import { WritePost } from "../../../pages/WritePost";
import { Favorites } from "../../../pages/Favorites";
import { MyFeed } from "../../../pages/MyFeed";
import { Category } from "../../../pages/Category";
import { NotFound } from "../../../pages/NotFound";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Posts } from "../../../pages/Posts/Posts";
import { Layout } from "../../../layouts/Layout";
import { Main } from "../../../components/Main";
import { Outlet } from "react-router-dom";
import { Authtorization } from "../../../pages/Authtorization/Authtorization";
import { Login } from "../../../components/Registration/Login/Login";
import { Signup } from "../../../components/Registration/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "new",
        element: <WritePost />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  {
    path: "/posts",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },

      {
        path: "post",
        element: <Post />,
      },

      {
        path: "favorites",
        element: <Favorites />,
      },

      {
        path: "feed",
        element: <MyFeed />,
      },
    ],
  },

  {
    path: "/authtorize",
    element: <Authtorization />,
  },

  {
    path: "/register",
    element:  <Signup />,}
]);

// пример:
// createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//         loader: ({ request }) =>
//           fetch("/api/dashboard.json", {
//             signal: request.signal,
//           }),
//       },
//       {
//         element: <AuthLayout />,
//         children: [
//           {
//             path: "login",
//             element: <Login />,
//             loader: redirectIfUser,
//           },
//           {
//             path: "logout",
//             action: logoutUser,
//           },
//         ],
//       },
//     ],
//   },
// ]);
