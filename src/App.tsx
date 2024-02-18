import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import NotFount from "./pages/NotFount"
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
    // {
    //   path:'/about',
    //   element:<About/>
    // },
    // {
    //   path:'/blog',
    //   element:<Blogs/>
    // },
    // {
    //   path:'/experience',
    //   element:<Experience/>
    // },
    // {
    //   path:'/contact-me',
    //   element:<Contact/>
    // },
    {
      path:"*",
      element:<NotFount/>
    }
])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
