import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/home"
import Detail from "../pages/Detail/detail"
import TodoPage from "../pages/todoPage"

export const router = createBrowserRouter([
  {
    path: "/",
    //element: <Home />,
    element : <TodoPage />
  },
  {
    path: "/photo/:id",
    element: <Detail />,
  },
])