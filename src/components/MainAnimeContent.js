import { Link } from "react-router-dom";
import AnimeCard from "./AnimeCard";
import "./css/MainAnimeContent.css";

const MainAnimeContent = (props) => {
  return (
    <div className="mainAnimeContainer">
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
