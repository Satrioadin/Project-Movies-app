import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import DetailPage from "./pages/DetailPage";
import MoviePageGenre from "./pages/MoviePageGenre";
import SearchPage from "./pages/SearchPage";
import TrandingPage from "./pages/TrandingPage";
import DiscoverPage from "./pages/DiscoverPage";
import UpComingPage from "./pages/UpComingPage";
import GenrePage from "./pages/GenrePage";
import TopRatePage from "./pages/TopRatePage";

function App() {
  return (
    <section>
      <header>
        <Navigation />
      </header>
      <main className="mb-5">
        <Routes>
          <Route path="/movie/search/:keyword" element={<SearchPage />} />
          <Route path="/*" element={<HomePage />} />
          <Route path="/movie/discover/list" element={<DiscoverPage />} />
          <Route path="/movie/trending/list" element={<TrandingPage />} />
          <Route path="/movie/toprate/list" element={<TopRatePage />} />
          <Route path="/movie/upcoming/list" element={<UpComingPage />} />
          <Route path="/movie/genre/:genre/:id" element={<MoviePageGenre />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/movie/genre" element={<GenrePage />} />
        </Routes>
      </main>
    </section>
  );
}

export default App;
