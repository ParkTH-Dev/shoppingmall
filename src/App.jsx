import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";

import { useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
  margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  li,ul{
    list-style: none;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
`;

const Wrapper = styled.div``;

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout authenticate={authenticate} setAuthenticate={setAuthenticate} />
      ),
      children: [
        {
          path: "",
          element: <ProductAll />,
        },
        {
          path: "login",
          element: (
            <Login
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          ),
        },
        {
          path: "products/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ],
    },
  ]);
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    </>
  );
}

export default App;
