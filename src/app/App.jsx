import "./styles/global.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router/routes";
import { Main } from "../components/Main";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
