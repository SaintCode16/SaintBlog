import { RouterProvider } from "react-router-dom";
import { Post } from "../pages/Post/Post";
import "./styles/global.scss";
import { router } from "./providers/router/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
