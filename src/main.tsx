import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/routes.tsx";
import { stores } from "./stores/index.ts";
import { Provider } from "react-redux";
import "@/assets/tailwind.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={stores}>
    <RouterProvider router={router} />
  </Provider>
);
