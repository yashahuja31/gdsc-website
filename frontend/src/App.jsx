import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import Events from "./components/events/Events.jsx";
import Header from './components/header/Header.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';
import EventsPage from "./pages/EventsPage.jsx";

function App() {

  return (
    <ParallaxProvider>
    <BrowserRouter>
      <Routes>
          <Route index element={<IndexPage/>} />
          <Route path={"/team"} element={<TeamPage/>} />
          <Route path={"/events"} element={<EventsPage />} />
      </Routes>
    </BrowserRouter>
    </ParallaxProvider>
  )
}

export default App
