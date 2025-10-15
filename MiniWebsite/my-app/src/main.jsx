import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import "bootstrap/dist/css/bootstrap.min.css";        
import "bootstrap/dist/js/bootstrap.bundle.min.js";   
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import { Home } from "./Home.jsx"
import { About } from "./About.jsx"
import { Contactus } from "./Contactus.jsx"
import { Blog } from './Blog.jsx';
import { BlogDetails } from './BlogDetails.jsx';
import Error from './Error.jsx';
let router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement: <Error />,
  },
  {
    path:"/about-us",
    element:<About/>
  },
  {
    path:"/contact-us",
    element:<Contactus/>
  },
   {
    path:"/blog",
    element:<Blog/>
  },
  {
    path:"/blog/:id",
    element:<BlogDetails/>
  }
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
