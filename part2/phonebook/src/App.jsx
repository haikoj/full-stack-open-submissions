import { useState, useEffect } from 'react'
import Search from './components/Search'
import Adding from './components/Adding'
import List from './components/List'
import personService from './services/persons'
import axios from 'axios'
import './index.css'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchWord, setSearchWord] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    const personObject = { 
      name: newName,
      number: newNumber
     }

    const oldPerson = persons.find(p => p.name === newName)

    if (oldPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(oldPerson.id, personObject)
          .then(response => {
            setPersons(persons.map(p => p.id === oldPerson.id ? response.data : p))
            setSuccessMessage(`Updated ${newName}`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 3500)
            setNewName('')
            setNewNumber('')
          })
      }
      return
    }

    personService
     .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setSuccessMessage(`Added ${newName}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 3500)
        setNewName('')
        setNewNumber('')
      })
  }

  const deleteName = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .deletion(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          setErrorMessage(`Person ${name} already deleted.`)
          setPersons(persons.filter(p => p.id !== id))
        setTimeout(() => {
          setErrorMessage(null)
        }, 3500)
        })
    }
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
      <Notification successMessage={successMessage} errorMessage={errorMessage}/>
      <Search searchWord={searchWord} handleSearchChange={handleSearchChange} />
      <Adding addName={addName} newName={newName} handleNameChange={handleNameChange}
      newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <List personsSearch={personsSearch} deleteName={deleteName}/>
    </div>
  )
}

export default App