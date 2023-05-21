import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/sign-in",
          element: <SignIn/>,
        },
        {
          path: "/sign-up",
          element: <SignUp/>,
        },
        {
          path: "/all-toys",
          element: <AllToys/>,
        },
        {
          path: "/my-toys",
          element: <MyToys/>,
        },
        {
          path: "/Add-toys",
          element: <AddToys/>,
        },
        {
          path: "/blog",
          element: <Blog/>,
        },
        {
          path: '/my-toys/update-toy/:id', 
          element: <UpdateToy/>, 
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
          path: 'toy/:id', 
          element: <ToyDetails/>, 
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
          path: 'all-toys/toy/:id', 
          element: <ToyDetails/>, 
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        }
      ],
    },
  ]);

export default router;