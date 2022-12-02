import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'


function App () {

  const [characters, setCharacters] = useState([]);

 function onSearch(id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.id) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}

  const onClose = (id) =>{
    setCharacters(characters.filter(character => character.id !== id))
  }

  return (
    <div className='App' style={{ padding: '3em'}}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
    </div>
  )
}

export default App
