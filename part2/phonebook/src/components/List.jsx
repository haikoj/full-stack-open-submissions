const List = (props) => {

    return (
        <ul>
            {props.personsSearch.map(person => 
            <li key={person.name}>{person.name} - {person.number}</li>
            )}
        </ul>
    )
}

export default List