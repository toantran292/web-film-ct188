import { HashRouter, Outlet, Route, Routes } from "react-router-dom"
import NotFound from "./screens/NotFound"
import Home from "./screens/Home"
import Series from "./screens/Series"
import Anime from "./screens/Anime"
import Sport from "./screens/Sport"
import About from "./screens/About"
import Nav from "./components/Nav"




const DefaultLayout = () => {
  return <>
    <Nav />
    <Outlet />
  </>
}

const App = () => {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="series" element={<Series />} />
        <Route path="anime" element={<Anime />} />
        <Route path="sport" element={<Sport />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
}

export default App
