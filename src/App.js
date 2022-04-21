import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
//import SidebarAnime from "./components/SidebarAnime";
import MainAnimeContent from "./components/MainAnimeContent";
import "./App.css";

const App = () => {
  const [animeList, SetAnimeList] = useState([]);

  const [search, SetSearch] = useState("");
  const [type, SetType] = useState("anime");

  const HandleSearch = (e) => {
    e.preventDefault();
    FechAnime(search, type);
  };

  const FechAnime = async (query, type, orderBy) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/${type}?q=${query}&order_by=title&sort=desc&limit=200`
    ).then((res) => res.json());

    SetAnimeList(temp.results);
  };

  const location = useLocation();
  console.log(location.pathname);

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
              <MainAnimeContent animeList={animeList} />
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default App;

//const [topAnime, SetTopAnime] = useState([]);

// const GetTopAnime = async () => {
//   const temp = await fetch(
//     `https://api.jikan.moe/v3/top/anime/1/bypopularity`
//   ).then((res) => res.json());

//   SetTopAnime(temp.top.slice(0, 10));
// };

//useEffect(() => {
//   GetTopAnime();

// }, []);

// <SidebarAnime topAnime={topAnime} />
//
