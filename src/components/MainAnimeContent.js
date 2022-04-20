import { Link } from "react-router-dom";
import AnimeCard from "./AnimeCard";
import "./css/MainAnimeContent.css";

const MainAnimeContent = (props) => {
  return (
    <div className="mainAnimeContainer">
      <div className="mainAnimeHead">
        <form className="searchAnime" onSubmit={props.HandleSearch}>
          <input
            type="search"
            placeholder="search for an anime"
            required
            value={props.search}
            onChange={(e) => props.SetSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="mainAnimeCards">
        {props.animeList.map((anime) => (
          <Link to={`${anime.mal_id}`} key={anime.mal_id}>
            <AnimeCard anime={anime} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MainAnimeContent;

//
