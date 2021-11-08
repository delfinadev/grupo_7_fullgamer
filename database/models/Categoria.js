module.exports = (sequelize, DataTypes) => {
    let alias = "Categorias";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        } ,
        category: {
            type: DataTypes.STRING
        }
    };
    let config = {
        tableName: "Categories",
        timeStamps: false
    };
    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models) {
        Categoria.hasMany(models.Productos, {
            foreignKey: "category_id",
            as: "Productos"
        });
    };

    return Categoria;
}