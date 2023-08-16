import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import Home from "./components/Home";
import Explore from "./components/Explore";
import { IconContext } from "react-icons";

function App() {
  return (
    <div className="font-font ">
      <IconContext.Provider value={{ size: "1.3em" }}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </IconContext.Provider>
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore/:media-type/:id",
        element: <Explore />,
      },
    ],
  },
]);

export default App;
