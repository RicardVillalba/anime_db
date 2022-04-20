import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
//import SidebarAnime from "./components/SidebarAnime";
import MainAnimeContent from "./components/MainAnimeContent";

import "./App.css";

const App = () => {
  const [animeList, SetAnimeList] = useState([]);
  //const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");
  let [type, SetType] = useState("anime");

  // const GetTopAnime = async () => {
  //   const temp = await fetch(
  //     `https://api.jikan.moe/v3/top/anime/1/bypopularity`
  //   ).then((res) => res.json());

  //   SetTopAnime(temp.top.slice(0, 10));
  // };

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

  //useEffect(() => {
  //   GetTopAnime();

  // }, []);

  return (
    <Routes>
      <Route
        path="*"
        element={
          <div className="App">
            <Header />
            <div className="mainSectionsContainer">
              <MainAnimeContent
                animeList={animeList}
                HandleSearch={HandleSearch}
                search={search}
                SetSearch={SetSearch}
                type={type}
                SetType={SetType}
              />
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default App;

//              <SidebarAnime topAnime={topAnime} />
//
