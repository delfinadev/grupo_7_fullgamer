module.exports = (sequelize, DataTypes) => {
    let alias = "Imagenes";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        createdAt: {
            field: "created_At",
            type: DataTypes.DATE,
        } ,
        updatedAt: {
            field: "updated_At",
            type: DataTypes.DATE
        },
    };
    let config = {
        tableName: "Products",
        timeStamps: true
    };
}
    const Producto = sequelize.define(alias, cols, config);

    return Producto;