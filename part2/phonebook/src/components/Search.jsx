const Search = (props) => {

    return (
        <div>
            search: <input value={props.searchWord} onChange={props.handleSearchChange} />
        </div>
    )
}

export default Search