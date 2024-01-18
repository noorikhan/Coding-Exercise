import React from "react";
import Catalogue from "./Catalogue";
import Cart from "./Cart";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Catalogue />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
