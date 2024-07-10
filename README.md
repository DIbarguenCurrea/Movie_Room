# Movie Room

<p>Movie Room es un proyecto creado para crear una nueva pelicula y adicional a esto sea guardada en una base de datos de MongoDB que previamente sea creado.</p>

<h3>Características</h3>

- Crear una nueva película
- Almacenamiento de datos en MongoDB

<h3> Tecnologías Utilizadas </h3>

**Frontend:** _HTML, CSS, JavaScript_
<br>

**Backend:** _Node.js, express, mongoose, morgan_
<br>

**Herramientas:** _VSCode, MongoDB y GitHub,_

<h3>Instalación</h3>

- Clonar el repositorio desde GitHub.
- Previamente debes generar una ruta de conexión en MongoDB, para ello debes ir a la página principal, crear cuenta o inisiar sesión, le das a la opción Create New Cluster, realizar la configuación pertinente y usar la ruta de conexión en un archivo nuevo _.env_ que debes colocar a la altura del _src_.
- Ubicarte en la ruta de la carpeta **/back** e instalar las dependencias usando _npm i_.
- Ubicarte en la ruta de la carpeta **/back** levantar el servidor con _npm start_.
- Ubicarte en la ruta de la carpeta **/front** e instalar las dependencias usando _npm i_.
- Ubicarte en la ruta de la carpeta **/back** levantar el proyecto con _npm start_.

<h3>Uso</h3>

Te recomiendo seguir los siguientes pasos para entender el proyecto:

**Paso 1**

Una vez que esté instalada, configurada las depedencias e iniciado el servido, puedes visualizar la vista _Home Page_ y para crear una nueva pelicula, te diriges a la vista de _Create Movie_ y rellenas los campos que te solicita el formulario.

Esto son algunos datos que puedes usar para el formulario:

_Ejemplo:_

```
{
  "title": "Spider-Man: Across the Spider-Verse",
  "year": 2023,
  "director": "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
  "duration": "2h 20min",
  "genre": [
    "Action",
    "Comedy",
  ],
  "rate": 8.6,
  "poster": "https://image.tmdb.org/t/p/original/37WcNMgNOMxdhT87MFl7tq7FM1.jpg",
  "description": "After meeting Gwen Stacy, the pleasant Brooklyn neighborhood where Mike Morales lives is transported to the multiverse, where Spiderman will meet new characters and experience incredible adventures."
},

```

<h3>Créditos</h3>

<p>En este momento no hay un nosotros. Estoy dirigiendo este proyecto solo. Así que cada comentario que proporciones, cualquier sugerencia que tengas y cualquier idea nueva que te guste compartir, no lo dudes, escribeme de inmediato.</p>

<h3>Contacto</h3>

**Correo electrónico:** *dibarguenc@gmail.com*.
**LinkedIn**: "https://www.linkedin.com/in/sebastianibarguen/"
