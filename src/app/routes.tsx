import { createBrowserRouter } from "react-router-dom";
import KoursePage from "@/kourse/page";
import DigidawPage from "@digidaw/Page";

export const router = createBrowserRouter([
  {
    path: "/kourse",
    element: <KoursePage />,
  },
  {
    path: "/digidaw",
    element: <DigidawPage />,
  },
]);
