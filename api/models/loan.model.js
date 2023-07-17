module.exports = (sequelize, DataTypes, Model) => {
    class Loans extends Model {}

    Loans.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        copyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'copies',
                key: 'id'
            }
        },
        borrowerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'borrowers',
                key: 'id'
            }
        },
        dateBorrowed: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dateReturned: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        timestamps: false,
        modelName: 'loans'
    });

    return Loans;
}