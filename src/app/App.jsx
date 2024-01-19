import { useState } from "react";
import { Signup } from "../components/Registration/Signup/Signup";
import "./styles/global.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router/routes";
import { Login } from "../components/Registration/Login/Login";

function App() {
  const [registration, setRegistrtion] = useState(true);

  return (
    <>
      {registration ? (
        <Signup setRegistrtion={setRegistrtion} />
      ) : (
        <Login setRegistrtion={setRegistrtion} />
      )}
    </>
  );
}

export default App;
