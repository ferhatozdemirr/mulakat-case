import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/home"
import Detail from "../pages/Detail/detail"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/photo/:id",
    element: <Detail />,
  },
])