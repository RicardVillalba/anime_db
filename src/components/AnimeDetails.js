const AnimeDetails = ({ anime }) => {
  return (
    <div>
      <h1>{anime.title}</h1>
      <img src={anime.image_url} alt="anime im" />
      <p>{anime.synopsis}</p>
      <p>episodes: {anime.episodes}</p>
      <p>score: {anime.score}</p>
      <p>start date: {anime.start_date}</p>
      <p>end date: {anime.end_date}</p>
      <p>Type: {anime.type}</p>
      <p>rated: {anime.rated}</p>
      <p>airing: {anime.airing}</p>
    </div>
  );
};

export default AnimeDetails;
