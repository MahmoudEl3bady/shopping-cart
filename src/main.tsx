import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import{ RouterProvider } from "react-router-dom";
// import { router } from "./router/index.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
      {/* <RouterProvider router={router} /> */}
    </QueryClientProvider>
  </React.StrictMode>
);
