module.exports = (sequelize, DataTypes) => {
    let alias = "Tablas";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        } ,
        color: {
            type: DataTypes.STRING
        } ,
        marca: {
            type: DataTypes.STRING
        } ,
        category: {
            type: DataTypesSTRING
        }

    };
    let config = {
        tableName: "Tables",
        timeStamps: false
    };
    const Tabla = sequelize.define(alias, cols, config);

    return Tabla;
}
//ok