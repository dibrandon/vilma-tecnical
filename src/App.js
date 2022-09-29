import './App.css';
import getPeople from './api/people';
import {useState, useEffect} from "react"


function App() {

  const [people, setPeople] = useState([]);

  useEffect(()=> {
    getPeople()
    .then((data)=> setPeople(data.results))
    .catch(console.log)
  })
  return (

    <ul>
      {people.map((character)=>(
        <li key = { character.name}>{character.name}</li>
      ))}
    </ul>


  );
}

export default App; 

