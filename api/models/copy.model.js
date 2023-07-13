module.exports = (sequelize, DataTypes, Model) => {
    class Copies extends Model {}

    Copies.init({
        bookid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        signature: {
            type: DataTypes.STRING,
            allowNull: false
        },
        loanid: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'copies'
    });

    return Copies;
}