// React imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// App imports
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);