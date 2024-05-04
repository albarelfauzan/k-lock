import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "../pages/landingPage";
import ManageKey from "../pages/manageKey";
import HomeOwner from "../pages/homeOwner";
import ShareKey from "../pages/shareKey";
import AutoLock from "../pages/autoLock";
import OpenKey from "../pages/openKey";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/managekey",
      element: <ManageKey />,
    },
    {
      path: "/autolock",
      element: <AutoLock />,
    },
    {
      path: "/homeowner",
      element: <HomeOwner />,
    },
    {
      path: "/sharekey",
      element: <ShareKey />,
    },
    {
      path: "/openkey",
      element: <OpenKey />,
    },
  ]);
  return <RouterProvider router={router} />;
}
