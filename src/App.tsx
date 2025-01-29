import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./page/Home"

function App() {
const routes = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:"*",
      element:<Home/>
    }
])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
