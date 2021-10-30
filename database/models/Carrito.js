module.exports = (sequelize, DataTypes) => {
    let alias = "Carrito";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        } ,
        user_id: {
            type: DataTypes.INTEGER,
            foreingKey: true
        } ,
        items: {
            type: DataTypes.INTEGER
        } ,
        total: {
            type: DataTypes.INTEGER
        } ,
    };
    let config = {
        tableName: "Cart",
        timeStamps: false
    };
    const Carrito = sequelize.define(alias, cols, config);

    return Carrito;
}