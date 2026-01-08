import { useState, useEffect } from 'react'
import Search from './components/Search'
import Adding from './components/Adding'
import List from './components/List'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchWord, setSearchWord] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    if (persons.some(p => p.name === newName)) {
    alert(`${newName} is already added to phonebook`);
    return;
    }
    if (persons.some(p => p.number === newNumber)) {
    alert(`${newNumber} is already added to phonebook`);
    return;
    }
    setPersons(persons.concat({ name: newName, number: newNumber}))
  }

  const personsSearch = searchWord ? persons.filter(person =>
        person.name.toLowerCase().includes(searchWord.toLowerCase())
      ) : persons

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchWord(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Search searchWord={searchWord} handleSearchChange={handleSearchChange} />
      <Adding addName={addName} newName={newName} handleNameChange={handleNameChange}
      newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <List personsSearch={personsSearch} />
    </div>
  )
}

export default App