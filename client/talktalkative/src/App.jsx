import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./pages/Router";

function App() {
  return (
    <div id="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
