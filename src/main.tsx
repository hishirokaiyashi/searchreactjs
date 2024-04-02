import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";
import { TodosProvider } from "./context/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TodosProvider>
    <App />
  </TodosProvider>
);
