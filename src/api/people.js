//api coneccion
export async function getPeople() {
    try {
      const response = await fetch("http://swapi.dev/api/people/");
      const data = await response.json();
      return data;
    } catch (err) {console.log() }
  }

  export async function getCharacter(id = 1) {
    const response = await fetch(`http://swapi.dev/api/people/${id}/`)
    const data = await response.json();
    return data;
}


export async function searchCharacter(name) {
    const response = await fetch(`http://swapi.dev/api/people/?search=${name}/`)
    const data = await response.json();
    return data;
}

//sin el export default pide setear a no-cors(why?)
export default getPeople