import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Error from './components/Error'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form/Form'


function App () {
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate()
  let username = 'ignaawaig@gmail.com';
  let password = 'asdf1234';

  const login = (userData)=>{
    if(userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  const logout = ()=>{
    setAccess(false);
  }

  useEffect(()=>{
    !access && navigate('/');
  }, [access])

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
      {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
