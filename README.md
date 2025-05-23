INSTALAR EXPRESS
=================
1- npm install express-generator nodemon -g
2- express --view=ejs miProyecto   o   npx express --view=ejs miProyecto
3- cd miProyecto npm install
4- nodemon

INSTALAR SQUELIZE
=================
1- instalar el workbench  https://dev.mysql.com/downloads/workbench/
2- instalar el server https://dev.mysql.com/downloads/mysql/
3- crear la contraseña del usuario root
4- Abrir el workbench e ir al "+"
4.1- Configuramos con el nombre "Local MySQL", hostaname: "localhost"
4.2- "Test conection", y esperemos que haya sido exitosa.
4.3- en la pagina pcpal del workbench, hacer click en la conexion que creamos, con el password que nos pida. se tendria que abrir la plataforma de trabajo del workbench.
4.2- con CTRL + T, creamos una pestaña de ejecucion nueva
5- creamos la tabla con    CREATE DATABASE movies_db;
6- en el menu del header, SERVER => Data Import
7- ... elegir la base de datos *.sql y clickear "Start Import"
8- en el aside izquierdo, elegir SHEMAS, y tanemos que ver la base de datos
9- en ese lado, elegir la base de datos "movies_db", que se ponga en negrita
10- CTRL + L y ejecutar una busqueda SELECT * FROM movies;
11- Si esta todo bien, tendria que mostrar el resultado de la busqueda

una vez en el editor de codigo, lo que nos falta hacer es conectar sequelize
1- npm install sequelize-cli -g 
2- npm install sequelize mysql2
3- crear el archivo `.sequelizerc` en el mismo dir que app.js
    const path = require('path')
 
    module.exports = {
    config: path.resolve('./database/config', 'config.js'),
    'models-path': path.resolve('./database/models'),
    'seeders-path': path.resolve('./database/seeders'),
    'migrations-path': path.resolve('./database/migrations'),
}
4- ejecutar sequelize init para que se cree la carpeta /database
5- vamos a database/config/config.js y modificamos
    "username": "root",
    "password": "26794337",
    "database": "movies_db",
    "host": "localhost",
    "dialect": "mysql"
6- en "app.js" tiene que estar app.use('/movies', moviesRouter);
7- en "routes/movies.js tiene que estar router.get('/', moviesController.index);
8- en "controllers/moviesController.js" tiene que estar 
    const moviesController = {
    index: async function (req, res) {
      try {
        const moviesList = await db.Movie.findAll()
        return res.json(moviesList)
        //return res.render("movies", { title: "PELICULAS", moviesList });
      } catch (error) {
        console.log(error)
      }
    },
9- ir a "/movies" para ver el json
10- crear la vista para "movies.js"


COMO USAR
==========
1- ejecutar el MySQL server 9.3 y activar el server siguiendo las instrucciones
2- controlar el mensaje en el "localhost:3306"
3- Luego correr el workbench para ver las tablas.