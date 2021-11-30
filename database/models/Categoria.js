module.exports = (sequelize, DataTypes) => {
    let alias = "Categorias";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        } ,
        name: {
            type: DataTypes.STRING
        }
    };
    let config = {
        tableName: "Categories",
        timestamps: false
    };
    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models) {
        Categoria.hasMany(models.Productos, {
            foreignKey: "category_id",
            as: "productos"
        });
    };

    return Categoria;
}