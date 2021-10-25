module.exports = (Sequelize, DataTypes) => {
    let alias = "Productos";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        } ,
        name: {
            type: DataTypes.STRING
        } ,
        price: {
            type: DataTypes.INTEGER
        } ,
        description: {
            type: DataTypes.STRING
        } ,
        category_id: {
            type: DataTypes.INTEGER,
            foreingKey: true
        } ,
        created_at: {
            type: DataTypes.DATE
        } ,
        updated_at: {
            type: DataTypes.DATE
        },
    };
    let config = {
        tableName: "Products",
        timeStamps: true
    };
    const Producto = sequelize.define(alias, cols, config);
    return Producto;
}