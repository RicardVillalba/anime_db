import { Link } from "react-router-dom";
import TopAnimeCard from "./TopAnimeCard";
import "./css/TopAnime.css";

const TopAnime = (props) => {
  console.log(props);
  return (
    <div className="topAnimeContainer">
      <div className="topTitleContainer">
        <h2>top Anime</h2>
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
