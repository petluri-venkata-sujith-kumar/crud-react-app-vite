import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./pages/Layouts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CreateCourse from "./component/courses/CreateCourse";
import AllCourses from "./component/courses/AllCourses";
import CourseDetails from "./component/courses/CourseDetails";
import EditCourses from "./component/courses/EditCourses";
import Allusers from "./users/Allusers";
import SingleUser from "./users/SingleUser";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import PrivateRoutes from "./helpers/PrivateRoutes";
// import Modal from './helpers/modals/Modal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            element: <AllCourses />,
          },
          {
            path: "create-course",
            element: (
              <PrivateRoutes>
                <CreateCourse />
              </PrivateRoutes>
            ),
          },
          {
            path: ":id",
            element: (
              <PrivateRoutes>
                <CourseDetails />
              </PrivateRoutes>
            ),
          },
          {
            path: "edit/:id",
            element: <EditCourses />,
          },
          {
            path: "users",
            element: (
              <PrivateRoutes>
                <Allusers />
              </PrivateRoutes>
            ),
          },
          {
            path: "users/:id",
            element: <SingleUser />,
          },
        ],
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}>App</RouterProvider>;
};

export default App;
