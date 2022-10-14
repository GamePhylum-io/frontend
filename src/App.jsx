
import "./App.less"
import GetRoutes from "./router"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <GetRoutes/>
    </BrowserRouter>
  )
}

export default App
