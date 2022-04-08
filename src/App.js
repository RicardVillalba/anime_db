import { useState, useEffect } from "react";
import Header from "./components/Header";
import SidebarAnime from "./components/SidebarAnime";
import MainAnimeContent from "./components/MainAnimeContent";
import "./App.css";

const App = () => {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="mainSectionsContainer">
        <SidebarAnime topAnime={topAnime} />
        <MainAnimeContent animeList={animeList} />
      </div>
    </div>
  );
};

export default App;
