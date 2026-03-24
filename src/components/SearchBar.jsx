import '../App.css'

function SearchBar({ onSearch }) {

    return(
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search Job.."
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;