import React from "react";
import Home from "./pages/Home";
import Send from "./pages/Send";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
<<<<<<< HEAD
// import Amplify from 'aws-amplify';
// import awsconfig from './';

// Amplify.configure(awsconfig);
=======
>>>>>>> 727d961793c51216cbd62d9ce315dcf643d59d09


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/send",
      element: <Send/>,
    }
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;