/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createHashRouter } from "react-router-dom";
import NewTask from "../pages/tasks/NewTask";
import ProjectDetails from "../pages/project_details";
import Sports from "../pages/sports";
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import ProtectedRoutes from "./ProtectedRoute"
import AccountLayout from "../layouts/account"
import Projects from "../pages/projects"
import Members from "../pages/members"
import Logout from "../pages/logout";
import { Navigate } from "react-router-dom";
import Notfound from "../pages/Notfound";
import ProjectContainer from "../pages/projects/ProjectContainer";
import TaskDetailsContainer from "../pages/tasks/TaskDetailsContainer";
import Read from "../pages/sports/read";
import ChangePassword from "../pages/changepass"
import { Suspense } from "react";

const router = createHashRouter([
  { path: "/", element: <Navigate to="/account/sport" replace /> },

  {
    path: "https://i0am0arunava.github.io/signin",
    element: <Signin />
 
  },
  {
    path: "https://i0am0arunava.github.io/changepass",
    element: <ChangePassword />

  },
  {
    path: "https://i0am0arunava.github.io/signup",
    element: <Signup />
  },
  {
    path: "https://i0am0arunava.github.io/logout",
    element: <Logout />
  },
  {
    path: "*",
    element: <Notfound />
  },
  // Protected Routes

  {
    path: "account",
    element: (
      <ProtectedRoutes>
        <AccountLayout />
      </ProtectedRoutes>
    ),
    ErrorBoundary: () => <>Failed to load the page</>,
    children: [
      { index: true, element: <Navigate to="/account/sport" replace /> },
      {
        path: "sport",
        element: (
          <Suspense fallback={<div>Loadinggg...</div>}>
            <Sports />
          </Suspense>
        ),
        children: [
          {
            path: "News/:Id",
            element: <Read />,
          }]
      },
      {
        path: "projects",
        element: <ProjectContainer />,
        children: [
          { index: true, element: <Projects />, },
          {
            path: ":projectID",
            element: <ProjectDetails />,
            children: [
              { index: true, element: <></> },
              {
                path: "tasks",
                children: [
                  { index: true, element: <Navigate to="../" /> },
                  {
                    path: "new",
                    element: <NewTask />,
                  },
                  {
                    path: ":taskID",
                    children: [
                      { index: true, element: <TaskDetailsContainer /> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "members",
        element: (<Members />)
      },
    ],
  },
]);
export default router;