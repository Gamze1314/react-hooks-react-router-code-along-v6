import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js";

const router = createBrowserRouter(routes);
console.log(router.routes)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
console.log(root)

// RouterProvider => //BrowserRouter => parent wrapper, provides Context for other components 
// with React Router , the user can conditionally render a different component based on the URL
// WITHOUT making a GET request, and reloading the HTML document.