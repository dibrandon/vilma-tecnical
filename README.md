# Software Engineer Test




Software Engineer Test

Questions
Please write a new app using use the following API (https://swapi.dev/) which will

1. Show a list of items.

2. Allow to select an item and display its details (the fields you consider relevant).

3. Create a search engine (by name) using the API and pressing "enter" to filter the
current listing.

4. Responsive. Show the detail section next to the listing in Desktop and in mobile the
listing above the detail section.

5. Optional => Paginate the listing by adding two buttons (preview and next) and the
current page.

Finally, following the UML diagram below, we need to extract a list of movies from the
"ACTION" genre only. You can use the MySQL Select statement.

link to UML diagram:

https://drive.google.com/file/d/1JVI9zf2vMBED53VhOaL7gGTtG5VlFTDG/view?usp=sharing

R) SQL query:
Asumiendo que la tabla Genre en sus campos contiene los ID de las Movies:

Select M.title from Movie M, Genre G where M.id = G.Action

Puntos: completados:

1) Mostrar una lista de items, Logrado.
2)Mostrar detalles relevamente, Logrado
3)Completado, pero sin funcionar bien.
4)Falto, responsive a completar en una rama secundaria.
5)Falto, Paginacion a completar en una rama secundaria.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).