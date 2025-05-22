module.exports = function(sequelize, dataTypes){
    let alias = 'Movie' //el nombre con el cual sequelize identificará al modelo.

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        title:{
            type: dataTypes.STRING,
        },
        rating:{
            type: dataTypes.DECIMAL,
        },
        awards:{
            type: dataTypes.INTEGER,
        },
        release_date:{
            type: dataTypes.DATE,
        },
        length:{
            type: dataTypes.INTEGER,
        },
        genre_id:{
            type: dataTypes.INTEGER,
        },
    }

    let config = {
        tableName: 'movies',
        timestamps: true, //si en la tabla estan los campos created_at y updated_at o su equivalente en camelCase createdAt y updatedAt
        underscored: true, //Si los nombres de los campos created_at y updated_at están escritos con guión bajo.
    }

const Movie = sequelize.define(alias, cols, config);
Movie.associate = function(models){
    Movie.belongsTo(models.Genre, {
        as: 'genre',
        foreignKey: 'genre_id'
    })

    Movie.belongsToMany(models.Actor, {
        as: 'actors',
        through: 'actor_movie',
        foreignKey: 'movie_id',
        otherKey: 'actor_id'
    })  
}


return Movie;
}