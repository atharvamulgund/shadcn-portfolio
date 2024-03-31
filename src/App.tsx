import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./page/Home"
// import About from "./pages/About"
// import Blogs from "./pages/Blogs"
// import Experience from "./pages/Experience"
// import Contact from "./pages/Contact"


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
