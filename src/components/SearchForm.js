import "./css/SearchForm.css";

const SearchForm = (props) => {
  return (
    <div className="mainAnimeHead">
      <form onSubmit={props.HandleSearch}>
        <div className="leftForm">
          <select
            value={props.type}
            onChange={(e) => props.SetType(e.target.value)}
            className="selectForm"
          >
            <option value="anime">anime</option>
            <option value="manga">manga</option>
          </select>
          <input
            className="searchInput"
            type="search"
            placeholder="search for an anime"
            required
            value={props.search}
            onChange={(e) => props.SetSearch(e.target.value)}
          />
        </div>
        <input type="submit" value="Submit" className="submitForm" />
      </form>
    </div>
  );
};

export default SearchForm;
