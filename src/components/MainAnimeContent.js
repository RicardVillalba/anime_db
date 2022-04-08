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
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </div>
  );
};
export default MainAnimeContent;
