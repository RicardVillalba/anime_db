import "./css/MainAnimeContent.css";

const MainAnimeContent = () => {
  return (
    <div className="mainAnimeContainer">
      <div className="mainAnimeHead">
        <form className="searchAnime">
          <input type="search" placeholder="search for an anime" required />
        </form>
      </div>
      <div className="mainAnimeCards">
        <span>haibane renmei</span>
        <span>tengen toppa</span>
        <span>akebi chan</span>
        <span>dragon ball</span>
      </div>
    </div>
  );
};
export default MainAnimeContent;
