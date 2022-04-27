import { Link, useLocation } from "react-router-dom";
import TopAnimeCard from "./TopAnimeCard";
import "./css/MainTopAnimeContent.css";

const TopAnime = (props) => {
  const location = useLocation();
  console.log(props);
  return (
    <div className="topAnimeContainer">
      <div className="topTitleContainer">
        {location.pathname === "/" ? <h2>top Anime</h2> : null}
      </div>
      <div className="topCards">
        {props.topAnime.map((tAnime) => (
          <Link to={`${tAnime.mal_id}`} key={tAnime.mal_id}>
            <TopAnimeCard tAnime={tAnime} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopAnime;
