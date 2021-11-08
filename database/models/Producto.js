module.exports = (sequelize, DataTypes) => {
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
        categoriaId: {
            field: "category_id",
            type: DataTypes.INTEGER,
            foreingKey: true
        } ,
        createdAt: {
            field: "created_At",
            type: DataTypes.DATE
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
    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Categorias, {
            foreingKey: "category_id",
            as: "categoria"
        });
    };

    return Producto;
}