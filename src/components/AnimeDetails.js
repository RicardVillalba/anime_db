import { Link } from "react-router-dom";
import "./css/AnimeDetails.css";

const AnimeDetails = ({ anime }) => {
  console.log(anime.episodes);
  return (
    <div className="animeDetailsContainer">
      <div className="animeDetailsHeader">
        <Link to="/">Keep searching</Link>
      </div>
      <div className="contentContainer">
        <div className="leftContentContainer">
          <h1>{anime.title}</h1>
          <img src={anime.image_url} alt="anime im" />
        </div>
        <div className="rightContentContainer">
          <div className="synopsis">
            <h3> synopsis:</h3>
            <p>{anime.synopsis}</p>
          </div>
          <div className="details">
            {anime.episodes === undefined ? (
              <div>
                <h4> chapters: </h4>
                <p>{anime.chapters}</p>
              </div>
            ) : (
              <div>
                <h4> episodes: </h4>
                <p>{anime.episodes}</p>
              </div>
            )}

            <h4> score: </h4>
            <p>{anime.score}</p>
            <h4> start date: </h4>
            <p>{anime.start_date.slice(0, 10)}</p>
            <h4> end date: </h4>
            <p>{anime.end_date.slice(0, 10)}</p>
            <h4>type: </h4>
            <p>{anime.type}</p>
            {anime.rated === undefined ? null : (
              <div>
                <h4> rated </h4>
                <p>{anime.rated}</p>
              </div>
            )}
            {anime.airing === undefined ? (
              <div>
                <h4> publishing: </h4>
                <p>{anime.publishing === true ? "yes" : "no"}</p>
              </div>
            ) : (
              <div>
                <h4> airing: </h4>
                <p>{anime.airing === true ? "yes" : "no"}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
