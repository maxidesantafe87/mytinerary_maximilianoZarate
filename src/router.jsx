import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Cities from "./pages/Cities";


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/index', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path:'/cities', element: <Cities />},

])

export default router