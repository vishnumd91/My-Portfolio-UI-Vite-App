import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { AdminContextProvider } from "./context";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./utils";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AdminContextProvider>
          <App />
        </AdminContextProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </Router>
);
