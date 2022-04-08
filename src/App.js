import { useState, useEffect } from "react";
import Header from "./components/Header";
import SidebarAnime from "./components/SidebarAnime";
import MainAnimeContent from "./components/MainAnimeContent";
import "./App.css";

const App = () => {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    SetTopAnime(temp.top.slice(0, 10));
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    FechAnime(search);
  };

  const FechAnime = async (query /*,order_by to filter*/) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=15`
    ).then((res) => res.json());

    SetAnimeList(temp.results);
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="mainSectionsContainer">
        <SidebarAnime topAnime={topAnime} />
        <MainAnimeContent
          animeList={animeList}
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
        />
      </div>
    </div>
  );
};

export default App;
