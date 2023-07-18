module.exports = (sequelize, DataTypes, Model) => {
    class Copies extends Model {}

    Copies.init({
        copyId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'books',
                key: 'bookId'
            }
        },
        signature: {
            type: DataTypes.STRING,
            allowNull: false
        },
        loanStatus: {
            type: DataTypes.ENUM('available', 'borrowed'),
            allowNull: false,
            defaultValue: 'available'
        }
    }, {
        sequelize,
        modelName: 'copies'
    });

    return Copies;
}