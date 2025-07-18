import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Booking from "../Pages/Booking/Booking";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Contact></Contact>,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement: "loging...",
        loader: () => fetch("../doctors.json"),
      },
      {path:'/details/:id',
        Component: Details,
        hydrateFallbackElement: "loging...",
        loader: ()=> fetch("../doctors.json")
      },
      {
        path:'/booking',
        Component: Booking
      },
      {
        path:'/blog',
        Component: Blogs,
        hydrateFallbackElement: "loging...",
        loader: ()=> fetch("../questionandanswer.json")
      }
    ],
    
  },
  {
    path: "/contact",
    Component: Contact
  }
]);
