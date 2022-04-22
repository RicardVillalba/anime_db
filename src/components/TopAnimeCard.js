import { Routes, Route, Link } from "react-router-dom";
import "./css/TopAnimeDetails.css";
const TopAnimeCard = ({ tAnime }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="cardContainer">
            <div>
              <img src={tAnime.image_url} alt="anime im" />
            </div>
            <h3>{tAnime.title}</h3>
          </div>
        }
      />
      <Route
        path={`${tAnime.mal_id}`}
        element={
          <h1>
            {
              <div className="animeDetailsContainer">
                <div className="animeDetailsHeader">
                  <Link to="/">go back</Link>
                </div>
                <div className="contentContainer">
                  <div className="leftContentContainer">
                    <h1>{tAnime.title}</h1>
                    <img src={tAnime.image_url} alt="anime im" />
                  </div>
                  <div className="rightContentContainer">
                    <div className="synopsis">
                      <h3> synopsis:</h3>
                      <p>{tAnime.synopsis}</p>
                    </div>
                    <div className="details">
                      <h4> episodes: </h4>
                      <p>{tAnime.episodes}</p>
                      <h4> score: </h4>
                      <p>{tAnime.score}</p>
                      <h4> start date: </h4>
                      <p>{tAnime.start_date}</p>
                      <h4> end date: </h4>
                      <p>{tAnime.end_date}</p>
                      <h4> emision: </h4>
                      <p>{tAnime.type}</p>
                      <h4> rated: </h4>
                      <p>{tAnime.rated}</p>
                      <h4> airing: </h4>
                      <p>{tAnime.airing === true ? "yes" : "no"}</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          </h1>
        }
      />
    </Routes>
  );
};

export default TopAnimeCard;
