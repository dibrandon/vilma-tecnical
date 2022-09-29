//coneccion api en diferentes js buscando el porque carga mal.
export async function getCharacter(id = 1) {
    const response = await fetch(`http://swapi.dev/api/people/${id}/`)
    const data = await response.json();
    return data;
}
export default getCharacter