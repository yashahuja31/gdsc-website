import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import Events from "./components/events/Events.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<IndexPage/>} />
          <Route path={"/team"} element={<TeamPage/>} />
          <Route path={"/events"} element={<Events />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
