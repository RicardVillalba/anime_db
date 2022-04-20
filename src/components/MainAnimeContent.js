import { Link } from "react-router-dom";
import AnimeCard from "./AnimeCard";
import "./css/MainAnimeContent.css";

const MainAnimeContent = (props) => {
  return (
    <div className="mainAnimeContainer">
      <div className="mainAnimeHead">
        <form onSubmit={props.HandleSearch}>
          <div className="leftForm">
            <select
              className="selectForm"
              value="{props.type}"
              onChange={(e) => props.SetType(e.target.value)}
            >
              <option value="anime">anime</option>
              <option value="manga">manga</option>
            </select>
            <input
              className="searchInput"
              type="search"
              placeholder="search for an anime"
              required
              value={props.search}
              onChange={(e) => props.SetSearch(e.target.value)}
            />
          </div>
          <input type="submit" value="Submit" className="submitForm" />
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
