import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import RootLayout from "./component/layout/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path="/about-us" element={<About />}></Route>
  </Route>
))


const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
