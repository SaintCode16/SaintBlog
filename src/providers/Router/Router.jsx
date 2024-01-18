import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Profile } from "../../pages/Profile";
import { Post } from "../../pages/Post";
import { WritePost } from "../../pages/WritePost";
import { Favorites } from "../../pages/Favorites";
import { MyFeed } from "../../pages/MyFeed";
import { Category } from "../../pages/Category";
import { NotFound } from "../../pages/NotFound";

{
  /* <Outlet />; */
}

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/profile",
      element: <Profile />,
    },

    {
      path: "/posts",
      element: <Post />,
      children: [
        {
          path: "category",
          element: <Category />,
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
      path: "/new",
      element: <WritePost />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

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
