module.exports = (sequelize, DataTypes) => {
    let alias = "Categorias";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        } ,
        category: {
            type: DataTypesSTRING
        }
    };
    let config = {
        tableName: "Categories",
        timeStamps: false
    };
    const Categoria = sequelize.define(alias, cols, config);

    return Categoria;
}