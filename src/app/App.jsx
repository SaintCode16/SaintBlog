import "./styles/global.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router/routes";
import { AddPost } from "../pages/AddPost/AddPost";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
