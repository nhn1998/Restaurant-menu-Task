import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "./Component/Main"
import Home from "./Pages/Home"
import SearchFood from "./Pages/SearchFood"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/search',
          loader:()=>{
            return fetch('FakeData.json') 
          },
          element: <SearchFood></SearchFood>
        }
      ]
    }
  ])

  return (
    <div className="dark:bg-black">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
