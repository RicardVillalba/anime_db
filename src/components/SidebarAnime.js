import "./css/SidebarAnime.css";

const SidebarAnime = ({ topAnime }) => {
  return (
    <div className="sidebarContainer">
      <nav>
        <h3>top Anime</h3>
        {topAnime.map((x) => (
          <a href="#" target="_blank" rel="noreferrer">
            {x.title})
          </a>
        ))}
      </nav>
    </div>
  );
};

export default SidebarAnime;
