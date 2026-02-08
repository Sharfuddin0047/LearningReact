
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard";
import CreateUser from "./CreateUser";
import AllUsers from "./AllUsers";
import EditUser from "./EditUser";

// CREATE A ROUTE
const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <CreateUser />,
      },
      {
        path: "/all-emp",
        element: <AllUsers />,
      },
      {
        path: "/edit-emp/:id", // dynamic route
        element: <EditUser />,
      },
    ],
  },
]);

// PROVIDE A ROUTE
const Router = () => {
  return <RouterProvider router={myRoutes} />;
};
export default Router;
