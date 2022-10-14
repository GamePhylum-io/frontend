import Layout from "@/views/Layout"
import Home from "@/views/Home"
import Error from "@/views/Error"
import Screener from "@/views/Data/AssetScreener"
import ScreenerDetails from "@/views/Data/AssetScreener/details/index"
import Watch from "@/views/Data/WatchList"
import Charts from "@/views/Data/Charts"
import News from "@/views/News"
import NewDetails from "@/views/News/details"
import GameInsight from '@/views/GameInsight'
import GameStrategy from '@/views/GameStrategy'
import { Navigate, useRoutes } from "react-router-dom"

const GetRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "home", element: <Home /> },
        {
          path: "",
          element: <Navigate to="home" replace />,
        },
      ],
    },
    {
      path: "/error",
      element: <Error />,
    },
    {
      path: "/data",
      element: <Layout />,
      children: [
        { path: "screener", element: <Screener /> },
        { path: "watch", element: <Watch /> },
        { path: "chart", element: <Charts /> },
        { path: "screenerDetails/:id", element: <ScreenerDetails /> },
      ],
    },
    {
      path: "/gameStrategy",
      element: <Layout />,
      children: [
        {
          path: ":tag",
          element: <GameStrategy />,
        },
        {
          path: "",
          element: <GameStrategy />,
        },
      ],
    },
    {
      path: "/gameInsight",
      element: <Layout />,
      children: [
        {
          path: ":category/:tag",
          element: <GameInsight />,
        },
        {
          path: "",
          element: <GameInsight />,
        },
      ],
    },
    {
      path: "/news",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <News />,
        },
      ],
    },
    {
      path: "/details/:type",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <NewDetails />,
        },
        {
          path: ":id",
          element: <NewDetails />,
        },
      ],
    },
  ])
  return routes
}

export default GetRoutes
