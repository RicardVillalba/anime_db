import { Routes, Route } from "react-router-dom";
import AnimeDetails from "./AnimeDetails";
import "./css/AnimeCard.css";

const AnimeCard = ({ anime }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="cardContainer">
            <a href={anime.url} target="_blank" rel="noreferrer">
              <div>
                <img src={anime.image_url} alt="anime im" />
              </div>
              <h3>{anime.title}</h3>
            </a>
          </div>
        }
      />
      <Route
        path={`${anime.mal_id}`}
        element={<AnimeDetails anime={anime} />}
      />
    </Routes>
  );
};

export default AnimeCard;
