import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Public
import FormLayout from "../components/form/FormLayout";
import NotFound from "../components/notFound/NotFound";

// Protected layout
import Navbar from "../components/Navbar/Navbar";
import PrivateRoutes from "./PrivateRoutes";
// Protected - Pages -
import HomePage from "../pages/home/HomePage";
import Popular from "../pages/popular/Popular";
import TopRated from "../pages/topRated/TopRated";
import UpComing from "../pages/upComing/UpComing";
import RecentlyPlayed from "../pages/recentlyPlayed/RecentlyPlayed";
import WatchTrailer from "../pages/watch/WatchTrailer";
import { useSearch } from "../context-api/dataProvider";
import MovieDetails from "../components/movieDetails/MovieDetails";

const Routing = () => {
  const { user } = useSearch();

  const appRouter = createBrowserRouter([
    !user
      ? {
          path: "*",
          element: <FormLayout />,
          index: true,
        }
      : {
          path: "/",
          element: (
            <PrivateRoutes>
              <Navbar />
            </PrivateRoutes>
          ),
          children: [
            { index: true, element: <HomePage /> },
            { path: "/popular", element: <Popular /> },
            { path: "/now_playing", element: <RecentlyPlayed /> },
            { path: "/upcoming", element: <UpComing /> },
            { path: "/top_rated", element: <TopRated /> },
            { path: "/movie-details/:id", element: <MovieDetails /> },
            { path: "/trailer/:id", element: <WatchTrailer /> },
            { path: "*", element: <NotFound /> },
          ],
        },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Routing;
