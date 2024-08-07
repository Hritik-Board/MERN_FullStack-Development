import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store/store.js";
import { Provider } from "react-redux";
import {
  QueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//!instalce of react query
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientPro vider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </QueryClientPro>
    </Provider>
  </React.StrictMode>
);
