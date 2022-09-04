const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our user model.
class User extends Model {}

//define table columns and configuration.
User.init(
    {
        //define an ID column.
        id:{
            // use the special Sequelize Datatypes object provide what type of data it is.
            type: DataTypes.INTEGER,
            //this is the same as NOT NULL in sql.
            allowNuull: false,
            // is this the primary key?
            primaryKey: true,
            //turn on auto-increment.
            autoIncrement: true
        },
        // define a username column.
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        //define an email column.
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            //there cannont be any duplicate email values.
            validate:{
                isEmail: true 
            }
        },
        //define password column.
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                //this means the password must be at least 4 characters long.
                len: [4]
            }
        }
    },
    {
        // table configuration options go here. (https://sequelize.org/v5/manual/models-definition.html#configuration))
        
        //pass in our imported sequelize connection (the direct connection to the database.)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields.
        timestamps: false,
        //don't pluralize name of database tables.
        freezeTableName:true,
        //use underscores instead of camel-casing.
        underscore:true,
        //make it so that our model name stays lowercase in the database.
        modelName: 'user'
    }
);

module.exports = User;