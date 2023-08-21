import React ,{useEffect , useState} from "react";
import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import Home from "./components/Home";
import Explore from "./components/Explore";
import { IconContext } from "react-icons";
import MovieDetails from "./components/MovieDetails";
import fetchDataFromApi from "./utils/fetchDataFromApi";
import GenreContext from "./utils/genreContext";

function App() {
  const [allGenresData, setAllGenresData] = useState({});

  useEffect(() => {
    getGenresData();
  }, []);

  const getGenresData = async () => {
    const endpoint = ["movie", "tv"];
    const promise = [];
    const allGenres = {};
    endpoint.forEach((point) => {
      return promise.push(fetchDataFromApi(`genre/${point}/list?language=en`));
    });
    const data = await Promise.all(promise);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    setAllGenresData(allGenres);
  };





  
  return (
    <GenreContext.Provider value={allGenresData}>
      <IconContext.Provider value={{ size: "1.3em" }}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </IconContext.Provider>
    </GenreContext.Provider>
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
      {
        path:"/:media_type/:movieId",
        element:<MovieDetails/>
      }
    ],
  },
]);

export default App;
