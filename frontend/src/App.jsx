import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import Header from "./components/header/Header.jsx";
import Cloud from "./components/cloudComponent/CloudComponent.jsx";
import Footer from "./components/footer/Footer.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import EventsPage from "./pages/EventsPage.jsx";

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path={"/team"} element={<TeamPage />} />
          <Route path={"/events"} element={<EventsPage />} />
          <Route path={"/blogs"} element={<Blogs />} />
        </Routes>
        <Cloud />
        <Footer />
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
