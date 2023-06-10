// import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { setupMock } from "@/mock/index"; // setup mock
import "@/samples/node-api"; // sample
import "rui-next/css"; // lib css
import "@/styles/index.scss"; // app styles

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);

// prod mock
if (!import.meta.env.DEV) {
  setupMock();
}

postMessage({ payload: "removeLoading" }, "*");
