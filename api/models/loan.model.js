module.exports = (sequelize, DataTypes, Model) => {
    class Loans extends Model {}

    Loans.init({
        copyid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        borrowerid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateborrowed: {
            type: DataTypes.DATE,
            allowNull: false
        },
        duedate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        datereturned: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'loans'
    });

    return Loans;
}