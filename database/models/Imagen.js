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
        ProductoId: {
            field: "product_id",
            type: DataTypes.INTEGER,
            foreignKey: true
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
        tableName: "Images",
        timeStamps: true
    };

    const Imagen = sequelize.define(alias, cols, config);

    Imagen.associate = function(models) {
        Imagen.belongsTo(models.Productos, {
            foreignKey: "product_id",
            as: "producto"
        });
    };

    return Imagen;
}
