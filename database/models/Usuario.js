module.exports = (sequelize, DataTypes) => {
    let alias = "Usuarios";
    let cols = {
        id: {
            type: DataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        } ,
        password: {
            type: DataTypes.STRING
        } ,
        role: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.IMAGE
        },
        notifications: {
            type: DataTypes.BOOLEAN
        },
    };
    let config = {
        tableName: "Users",
        timeStamps: false
    };
    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}