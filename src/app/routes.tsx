import { createBrowserRouter } from "react-router-dom";
import KoursePage from "@/kourse/page";

export const router = createBrowserRouter([
  {
    path: "/kourse",
    element: <KoursePage />,
  },
]);
