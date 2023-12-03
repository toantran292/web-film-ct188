import { HashRouter, Route, Routes } from "react-router-dom";
import NotFound from "./screens/NotFound";
import Home from "./screens/Home";
import About from "./screens/About";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./main.css";

import DefaultLayout from "./layouts/DefaultLayout";
import MovieDetail from "./screens/MovieDetail";
import CategoryDetail from "./screens/CategoryDetail/CategoryDetail";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="page/:route" element={<CategoryDetail />}>
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="page/:route/:id" element={<MovieDetail />} />
          <Route path="about" element={<About />} />
          {/* details */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
