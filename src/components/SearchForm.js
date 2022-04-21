import "./css/MainAnimeContent.css";

const SearchForm = (props) => {
  console.log(props.search);
  return (
    <div className="mainAnimeHead">
      <form onSubmit={props.HandleSearch}>
        <div className="leftForm">
          <select
            className="selectForm"
            value="{props.type}"
            onChange={(e) => props.SetType(e.target.value)}
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
        <input
          type="submit"
          value="Submit"
          className="submitForm"
          //onSubmit={console.log(props.type)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
