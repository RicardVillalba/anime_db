import "./css/TopAnime.css";

const SidebarAnime = ({ topAnime }) => {
  return (
    <div className="topAnimeContainer">
      <div className="topTitleContainer">
        <h2>top Anime</h2>
      </div>
      <div className="topCards">
        {topAnime.map((topAnime) => (
          <div className="cardContainer" key={topAnime.mal_id}>
            <div>
              <img src={topAnime.image_url} alt="anime im" />
            </div>
            <h3>{topAnime.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarAnime;
