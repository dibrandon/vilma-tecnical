import './App.css';
import React, { useState, useEffect, useRef } from "react"
import {Navbar2} from './navbar2';
import { getPeople, getCharacter, searchCharacter } from './api/people'; 
//import {getCharacter} from './api/apiDetails';



function App() {
 //traer todos los pjs.
  const [people, setPeople] = useState([]);

  //ver el actual pj
  const [ongoingCharacter, setOngoingCharacter] = useState(1)

  //detalles del actual pj:
  const [details, setDetails] = useState({})

  //search
  const inputSearchRef = useRef(null)
  const [textSearch, setTextSearch ] = useState("")

  //useEffect para traer los datos de la api
  useEffect(() => {
    getPeople()
      .then((data) => setPeople(data.results))
      .catch((err) => { console.log(err) })
  })

  //useEffect para traer la info al cliquear el nombre en la lista
  useEffect(() => {
    getCharacter(ongoingCharacter)
      .then(setDetails)
      .catch((err) => { console.log(err) })
  }, [ongoingCharacter]);

  //capacidad de cliquear y traaer la info del personaje.
  const showDetails = (character) => {
    const id = Number(character.url.split("/").slice(-2)[0]);
    setOngoingCharacter(id);
  };

  //Search engine:

  const onChangeTextSearch = (e) => {
    e.preventDefault()
    const text = inputSearchRef.current.value;
    setTextSearch(text);
  };

  const onSearchSubmit = (e) => {
    if (e.key !== "Enter") return
    inputSearchRef.current.value = "";
    setDetails({});
    searchCharacter(textSearch)
    .then((data)=>setPeople(data.results))
    .catch((err) => { console.log(err) },[])

  }

  return (

 <div>
      <Navbar2/>
{/* search */}
      <div>
        <input 
        ref= {inputSearchRef} 
        onChange={onChangeTextSearch}
        onKeyDown = {onSearchSubmit}
        type="text" 
        placeholder ="Busca un personaje"/>
      </div>


{/* mapeo de la lista */}

      <ul>
        {people.map((character) => (
          <li key={character.name} onClick={() => showDetails(character)}>{character.name}</li>
        ))}
      </ul>
    
      {/* details del elemento seleccionado */}
      {details && (
      <>
     
        <h2>{details.name}</h2>
        <ul>
          <li>Height: {details.height}</li>
          <li>Mass: {details.mass}</li>
          <li>Birth: {details.birth_year}</li>
        </ul>
      </>
      )}
    </div>

  )
};

export default App

