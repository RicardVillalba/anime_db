import { Routes, Route } from "react-router-dom";
import TopAnimeDetails from "./TopAnimeDetails";
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
        element={<TopAnimeDetails tAnime={tAnime} />}
      />
    </Routes>
  );
};

export default TopAnimeCard;
