module.exports = function (sequelize, dataTypes){

    let alias = 'Actor'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER
        }

    }

    let config = {
         tableName : "actors",
         timestamps: true, //si en la tabla estan los campos created_at y updated_at o su equivalente en camelCase createdAt y updatedAt
         underscored: true, //Si los nombres de los campos created_at y updated_at están escritos con guión bajo.
    };

    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = function(models){
        
        Actor.belongsToMany(models.Movie, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id'
        })  
    }

    return Actor;

}