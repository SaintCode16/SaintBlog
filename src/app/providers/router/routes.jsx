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
import { AddPost } from "../../../pages/AddPost/AddPost";
import { all } from "q";

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
        path: ":myposts",
        element: <Posts />,
      },

      {
        path: "favorites",
        element: <Favorites />,
      },

      {
        path: "posts",
        element: <Posts />,
        children: [
          {
            path: ":postId",
            element: <Post />,
          },

          {
            path: "category",
            children: [
              {
                path: ":category",
                element: <Category />,
              },

              {
                path: "all",
                element: <Posts />,
                children: [],
              },
            ],
          },

          {
            path: "feed",
            element: <MyFeed />,
          },
        ],
      },

      {
        path: "add",
        element: <AddPost />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "/authtorize",
    element: <Authtorization />,
  },

  {
    path: "/register",
    element: <Signup />,
  },
]);
