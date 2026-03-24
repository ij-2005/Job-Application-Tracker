import '../App.css'


function SearchBar({ onSearch, onFilter }) {

    return (
    <div className="search-bar">
      {/* Search Input */}
      <div className="search-input">
        <input
          type="text"
          placeholder="Search Job..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Filter Dropdown */}
      <div className="filter-dropdown">
        <select onChange={(e) => onFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;