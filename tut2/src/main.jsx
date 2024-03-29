import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./routes/Posts.jsx";
import { loader as postLoader } from "./routes/Posts.jsx";
import { action as newPostAction } from "./routes/NewPost.jsx";
import "./index.css";
import RootLayout from "./routes/RootLayout.jsx";
import NewPost from "./routes/NewPost.jsx";
import PostDetails, {loader as PostDetailsLoader, action as PostDetailsAction} from "./routes/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: newPostAction,
          },
          {
            path: "/:id",
            element: <PostDetails />,
            loader: PostDetailsLoader,
            action: PostDetailsAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
