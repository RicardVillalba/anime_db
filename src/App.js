import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import TopAnime from "./components/TopAnime";
import MainAnimeContent from "./components/MainAnimeContent";
import "./App.css";

const App = () => {
  const [type, SetType] = useState("anime");
  const [animeList, SetAnimeList] = useState([]);
  const [search, SetSearch] = useState("");

  const [topAnime, SetTopAnime] = useState([]);

  const HandleSearch = (e) => {
    e.preventDefault();
    FechAnime(search, type);
  };

  const FechAnime = async (search, type) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/${type}?q=${search}&order_by=title&sort=desc&limit=200`
    ).then((res) => res.json());

    SetAnimeList(temp.results);
  };

  const location = useLocation();

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    SetTopAnime(temp.top.slice(0, 15));
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <Routes>
      <Route
        path="*"
        element={
          <div className="App">
            {location.pathname === "/" ? <Header /> : null}

            {location.pathname === "/" ? (
              <SearchForm
                animeList={animeList}
                HandleSearch={HandleSearch}
                search={search}
                SetSearch={SetSearch}
                type={type}
                SetType={SetType}
              />
            ) : null}

            <div className="mainSectionsContainer">
              {animeList !== 0 ? (
                <MainAnimeContent animeList={animeList} />
              ) : null}
            </div>
            {animeList.length === 0 ? <TopAnime topAnime={topAnime} /> : null}
          </div>
        }
      />
    </Routes>
  );
};

export default App;
