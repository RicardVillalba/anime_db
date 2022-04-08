import "./css/AnimeCard.css";

const AnimeCard = ({ anime }) => {
  return (
    <div className="cardContainer">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <div>
          <img src={anime.image_url} alt="anime im" />
        </div>
        <h3>{anime.title}</h3>
      </a>
    </div>
  );
};

export default AnimeCard;
