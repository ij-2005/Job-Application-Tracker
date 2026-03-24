import '../App.css'

function SearchBar({ onSearch }) {

    return(
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search company or role.."
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;