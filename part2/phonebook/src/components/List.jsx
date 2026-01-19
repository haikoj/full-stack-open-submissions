const List = (props) => {

    return (
        <ul>
            {props.personsSearch.map(person => (
            <li key={person.name}>{person.name} - {person.number}
            <button onClick={() => props.deleteName(person.id, person.name)}>
                Delete
            </button></li>
            ))}
        </ul>
    )
}

export default List