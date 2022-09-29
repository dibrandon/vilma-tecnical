export async function getPeople() {
    try {
      const response = await fetch("http://swapi.dev/api/people/");
      const data = await response.json();
      return data;
    } catch (err) {console.log() }
  }

  export default getPeople