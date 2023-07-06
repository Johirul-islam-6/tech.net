import Home from "../pages/Home/Home";
import Login from "../pages/Registration/Login";
import Error404 from "../pages/Error-404/Page404";
import {createBrowserRouter} from 'react-router-dom'
import App from "../App";

const router = createBrowserRouter([
  
  {
    path: "*",
    element: <Error404/>
  },
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <Login/>
  },
]);

export default router;