module.exports = (sequelize, DataTypes) => {
    let alias = "Usuarios";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        } ,
        password: {
            type: DataTypes.STRING
        } ,
        role: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        },
        notifications: {
            type: DataTypes.STRING
        },
    };
    let config = {
        tableName: "Users",
        timestamps: false
    };
    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}