const AnimeDetails = ({ anime }) => {
  console.log(anime);

  return (
    <div>
      <h1>{anime.title}</h1>
      <img src={anime.image_url} alt="anime im" />
      <p>{anime.synopsis}</p>
      <p>episodes:{anime.episodes}</p>
      <p>score:{anime.score}</p>
    </div>
  );
};

export default AnimeDetails;
