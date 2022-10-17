import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChanges = (event) => { 
    setNewName(event.target.value)
  }

  const addPerson = (event) => {

    event.preventDefault();

    persons.every(items => { 
      let nameExist = Object.keys(items).map((item) => items[item].toUpperCase() === newName.toUpperCase());
      
      if(nameExist){
        setNewName('');
        return false;
      }
      
      return true;
    })

    setPersons(persons.concat({name: newName}));
    setNewName('');
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChanges}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,id) => <p key={id}>{person.name}</p>)}
      <div>debug: {newName}</div> 
    </div>
  )
}

export default App