# ¡Juguemos a la lotería!
Ejercicio en Javascript que genera tablas de la lotería mexicana:

1. Se generó un archivo .json para almacenar la información de las 54 cartas que integran la lotería mexicana, en este solo se puso como información el nombre y la imagen.
2. Se creó una carpeta de assets para almacenar dichas imagenes.
3. Se crearon los archivos HTML, CSS y Javascript independientemente por buena práctica.
4. En el archivo index.html se puso una estructura para que el usuario interactue desde el navegador y elija cuántas tablas de loteria necesita, al dar click en el boton "¡jugar!" se desplegaran las cartas generadas desde Javascript.
5. En el archivo loteria.js se realizó:
5.1.  Una función asincrona para obtener los recursos del .json mediante el uso de "fetch".
5.2. Funciones para generar las tablas con las 16 cartas, las cuales debían ser únicas e irrepetibles, en este caso se hace uso de Math para obtener aleatoriamente menos de 16 elementos para las tablas y que estos sean irrepetibles en cada una.
5.3. Para poder mostrar las tablas seleccionadas al usuario se hace la manipulación del DOM mediante getElementById y eventos como addEventListener lo que permitirá que las cartas se generen al hacer click en el botón.
6. En el archivo style.css únicamente se da un estilo sencillo para la interfaz.

