import React from "react";
import { Navi } from "./components";
import { Home, Login, Register } from "./pages";

function App() {
  return (
    <>
      <Navi />
      {/* <Login /> */}
      <Register />
    </>
  );
}

export default App;
