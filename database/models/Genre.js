module.exports = function(sequelize, dataTypes){
    // Definir un alias.
        let alias = 'Genre'; // Con este alias Sequelize va a poder identificar internamente al archivo de modelo.
    // Describir la configuracion de las columnas de la tabla
        let cols = {
            id:{
                autoincrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            name:{
                type: dataTypes.INTEGER,
            },
            ranking:{
                type: dataTypes.DATE,
            },
            active:{
                type: dataTypes.INTEGER,
            },
        }
        let config = {
            table:'genres',
            timestamps: false, //si en la tabla estan los campos created_at y updated_at o su equivalente en camelCase createdAt y updatedAt
            underscore: true, //Si los nombres de los campos created_at y updated_at están escritos con guión bajo.
        }
        const Genre = sequelize.define(alias,cols,config);

        Genre.associate = function(models){
            Genre.hasMany(models.Movie, {
                as:'movies',
                foreignKey: 'genre_id'   
            })
        }
        
        return Genre;
    }
