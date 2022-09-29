import './App.css';
import { getPeople, getCharacter } from './api/people';
//import {getCharacter} from './api/apiDetails';
import { useState, useEffect,useRef } from "react"


function App() {
  //hooks: traer todos, ver el actual, detalles del actual, referencia al buscar
  const [people, setPeople] = useState([]);
  const [ongoingCharacter, setOngoingCharacter] = useState(1)
  const [details, setDetails] = useState({})

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
    const id = Number(character.url.split('/').slice(-2)[0])
    setOngoingCharacter(id)
  }
  return (

    <div>
      <div>
        <input type="text" placeholder ="Busca un personaje"/>
      </div>

      <ul>
        {people.map((character) => (
          <li key={character.name} onClick={() => showDetails(character)}>{character.name}</li>
        ))}
      </ul>
      <>
        <h2>{details.name}</h2>
        <ul>
          <li>Height: {details.height}</li>
          <li>Mass: {details.mass}</li>
          <li>Birth: {details.birth_year}</li>
        </ul>
      </>
    </div>

  )
};

export default App

