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
        path: "/posts",
        element: <Posts />,
        children: [
          {
            path: "all",
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
        path: "new",
        element: <WritePost />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
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
